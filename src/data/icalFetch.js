import ical from "node-ical";

export default async function() {
    let events = [];
    const headerwebEvents = await ical.async.fromURL(
        'https://www.meetup.com/story-games-la/events/ical/',
        { headers: { 'User-Agent': 'StorygamesLA / 1.0'}}
    );
    for ( let k in headerwebEvents ){
        if (headerwebEvents.hasOwnProperty(k)) {
            const ev = headerwebEvents[k];
            if ( headerwebEvents[k].type == 'VEVENT') {
                events.push(ev)
            }
        }
    }
    return events;
};