<script>
    import { doc, getDoc } from 'firebase/firestore';
    import { yellow_color, db, user, outline_width_em, outline_style, sidebar_width_em, updateSize } from '../constants.js';
    import SidebarBox from './SidebarBox.svelte';

    var electionInfo;
    var seeingElectionName = "";
    var happened = false;

    // If on submission page
    $: if ($user != undefined && $user.elections != undefined && $user.elections.length == $user.pageOn){
        sidebar_width_em.set({
                width: 0,
                display: "none"
            });
        } else {
            updateSize();
        }

    /* ----------- UPDATING THE SIDEBAR ----------- */
    // Update the first time the user gets on the app
    $: if (electionInfo == undefined && $user.confirmed){
        electionInfo = getElectionName();
    }
    // If the names of the sidebar and the main title of voting screen is different
    $: if (seeingElectionName != undefined && $user.elections != undefined && seeingElectionName.indexOf($user.elections[$user.pageOn]) == -1){
        electionInfo = getElectionName();
        happened = false;
    }
    // If it hasn't happened and user's on a page that's not on a submit page
    $: if (!happened && $user.elections != undefined && $user.pageOn < $user.elections.length) {
        happened = true;
        electionInfo = getElectionName();
    }

    // Get information from firestore
    async function getElectionName(){
        var collectionID = $user.elections[$user.pageOn];
        var res =  (await getDoc(doc(db, collectionID + "/All Positions"))).data();
        if (res == undefined) {
            return;
        }
        seeingElectionName = res.electionName;

        return {
            electionName: res.electionName,
            positions: res.positions,
            count: res.count
        };
    }

    // CONTROLLING SIDEBAR HEIGHT 
    var sidebarComp;
    function scrollContainerResize(){
        if (sidebarComp != null){
            sidebarComp.style.height = (window.innerHeight-230) +"px";
        }
        
    }
    window.addEventListener("resize", scrollContainerResize);
    $: if ( sidebarComp != null && $user.pageOn >=0){
        scrollContainerResize();
    }
</script>

<div id = "sidebar" 
    style = "{outline_style} color: {yellow_color}; margin-top: {outline_width_em}em; width: {$sidebar_width_em.width}em; display: {$sidebar_width_em.display};">
    
    {#await electionInfo}
        <p> Processing...</p> <!-- Waiting for firestore -->

    {:then electionInfo}
        {#if electionInfo != undefined}
        <div style = "margin-bottom: 1.25em; margin-top: 1.5em">
            {electionInfo.electionName} Election <!-- Name of the election -->
        </div>

        <!-- Jump to top/bottom of the page -->
        <a href = "#top"><button style = "background-color: {yellow_color};">Top</button></a>
        <a href = "#bottom"><button style = "background-color: {yellow_color};">Bottom</button></a>
        <br><br>

        <div bind:this = {sidebarComp} id = "scroll_container"> <!-- Sidebar boxes (showing positions + candidate(s)) -->
            <div class = "positions">
                {#each electionInfo.positions as officerPos}
                    <SidebarBox position = "{officerPos}" />
                {/each}
            </div>
        </div>
        {/if}
    {/await}        
</div>

<style>
    #sidebar {
        position: fixed;
        padding-top: 1em;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        
    }
    #scroll_container {
        position: relative;
        overflow-y: scroll;
        overflow-x:hidden;
    }
    .positions { /* mostly for debugging*/
        background-color: rgb(30, 30, 30);
        
    }
    #scroll_container::-webkit-scrollbar{
    display: none;
  }
</style>