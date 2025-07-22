/* 
Requirements 
1. pressing the "on" button turns the relay on
2. pressing the "off" button turns the relay off
3. (Completed) pressing the AIU/ODU buttons gives an error
4. show only the PDU that control is being changed (mimic BY?)
5. pull whatever status available (most likely only 400A)

6. determine if login is necessary
    NO - Need to set proxy server to satisfy CORS
    YES - Need to research how to do so
        Seems to work without doing so. Just throws an err in the console but controls still work.

UPDATES:

*/

//Status polling

/*
async function pollRelayStatus(ip) {
      try {
        const response = await fetch(`http://${ip}/status.xml`);
        if (!response.ok) throw new Error("Failed to get status");

        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        const container = document.getElementById("relayStatus");
        container.innerHTML = ""; // Clear existing content

        for (let i = 1; i <= 8; i++) {
          const relay = xmlDoc.querySelector(`relay${i}`);
          const state = relay?.textContent === "1" ? "on" : "off";

          const div = document.createElement("div");
          div.className = `relay ${state}`;
          div.textContent = `Relay ${i}: ${state.toUpperCase()}`;
          container.appendChild(div);
        }
      } catch (e) {
        console.error("Error polling status:", e);
      }
    }

    // Start polling every 5 seconds
    pollRelayStatus(pdu1IP);
    setInterval(() => pollRelayStatus(pdu1IP), 5000);
*/
//PDU Relay controls

async function pduControl(pduIP, relayNum, relayState){
    try{ 
        const response = await fetch(`http://${pduIP}/io.cgi?relay=${relayNum}&state=${relayState}`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log(`Successfully switched relay ${relayNum}.`);
    } catch(e){
        console.error("Error:", e);
    }
}

/*This is for the AIU/ODU.
Should remain on to keep from losing connection to the outside equipment.
Will display alert.
*/ 
function AIUbutton(){
    window.alert(`This relay is on and should remain on to prevent loss of connection to outdoor equipment. 

    This relay being turned off will require physical intervention to fix.`);
    console.log("something something something bad")
}
