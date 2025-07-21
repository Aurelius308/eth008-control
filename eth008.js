/* 
Requirements 
1. pressing the "on" button turns the relay on
2. pressing the "off" button turns the relay off
3. (Completed) pressing the AIU/ODU buttons gives an error
4. show only the PDU that control is being changed (mimic BY)
5. pull whatever status available (most likely only 400A)

6. determine if login is necessary
    NO - Need to set proxy server to satisfy CORS
    YES - Need to research how to do so

UPDATES:

*/

//IP addresses for the two PDUs in a system (change these per the system IP scheme)
const pdu1IP = "10.10.10.134"
const pdu2IP = "10.10.10.135"

//Status polling

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

//PDU 1 Relay controls

async function pdu1R1on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=1&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R1off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=1&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R2on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=2&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R2off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=2&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R3on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=3&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R3off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=3&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R4on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=4&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R4off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=4&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R5on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=5&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R5off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=5&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R6on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=6&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R6off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=6&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R7on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=7&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R7off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=7&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R8on(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=8&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu1R8off(){
    try{ 
        const response = await fetch(`http://${pdu1IP}/io.cgi?relay=8&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}

//PDU 2 relay controls

async function pdu2R1on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=1&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R1off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=1&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R2on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=2&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R2off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=2&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
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

        This relay being turned off will require physical remedies.`);
}

async function pdu2R4on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=4&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R4off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=4&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R5on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=5&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R5off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=5&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R6on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=6&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R6off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=6&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R7on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=7&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R7off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=7&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R8on(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=8&state=0`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned on.");
    } catch(e){
        console.error("Error:", e);
    }
}
async function pdu2R8off(){
    try{ 
        const response = await fetch(`http://${pdu2IP}/io.cgi?relay=8&state=1`);
        if (!response.ok) throw new Error("Operation failed, try again");
        console.log("Relay turned off.");
    } catch(e){
        console.error("Error:", e);
    }
}






