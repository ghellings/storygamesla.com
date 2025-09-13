import ical from "node-ical";
import fs from "fs";

export default async function() {
    const JSON_FILE = "./events.json";
    try {
        const jsonData = fs.readFileSync(JSON_FILE);
        const events = JSON.parse(jsonData);
        const oldEventsStr = JSON.stringify(events);
        const headerwebEvents = await ical.async.fromURL(
            'https://www.meetup.com/story-games-la/events/ical/',
            { headers: { 'User-Agent': 'StorygamesLA / 1.0'}}
        );
        for ( let k in headerwebEvents ){
            if (headerwebEvents.hasOwnProperty(k)) {
                const ev = headerwebEvents[k];
                if ( headerwebEvents[k].type == 'VEVENT') {
                    events[ev['uid']] = ev;
                }
            }
        }
        const newEventsStr = JSON.stringify(events);
        if ( oldEventsStr != newEventsStr ) {
            fs.writeFileSync(JSON_FILE, JSON.stringify(events));
        }
        return events; 
    } catch (error) {
        console.error(error);

        throw error;
    }
};