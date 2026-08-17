const lessons = [
  { id:'exam', label:'01 · Testing & vision', title:'Know the tests', summary:'Virginia may require a two-part knowledge exam, vision screening, and a road skills test. Know what to expect before you take the test.', facts:[['Knowledge part one','10 road-sign questions. You must answer all 10 correctly before continuing.'],['Knowledge part two','30 general-knowledge questions. You need at least 24 correct (80%).'],['Failed knowledge exam','Drivers under 18 wait 15 full days. After three failures, approved classroom instruction is required before attempt four.'],['Road-test vehicle','Bring a registered, inspected vehicle with plates and working brakes, belts, horn, lights, signals, mirrors, and speedometer. An autocycle cannot be used.'],['Failed road test','Wait two days before another attempt. Three DMV failures require approved in-vehicle instruction.'],['Vision','Unrestricted licensing generally requires 20/40 acuity and 110 degrees of horizontal vision. Required corrective lenses create a C restriction.']], note:['Inspect before the appointment','Check your lights before you leave. Finding a dead brake light at the DMV is a bad time to find out.'] },
{ id:'signs', label:'02 · Road signs', title:'Read shape before words', summary:'Signs are designed to communicate from a distance. Learn the shapes, colors, and symbols used on road signs.', facts:[['Octagon','Stop. Always. Come to a complete stop at the line, crosswalk, or curb.'],['Triangle','Yield. Slow down, prepare to stop, and let traffic or pedestrians pass.'],['Diamond / pentagon','Diamond warns of hazards. A five-sided pentagon marks a school zone or crossing.'],['Rectangles','Vertical rectangles usually state laws or instructions. Horizontal rectangles generally provide directions or information.'],['Colors','Red = stop/prohibition; yellow = warning; orange = work zone; pink = incident; green = direction; blue = services; brown = recreation.'],['Railroad signs','A round yellow sign gives advance warning; a crossbuck marks the crossing itself. Stop for flashing lights or a lowered gate.']], note:['Shape is free information','Shape and color often reveal a sign before its words become readable. Pay attention to the shape and color, not just the words.'] },
  { id:'rightway', label:'03 · Right-of-way', title:'Yield without guessing', summary:'Do not assume you have the right-of-way. The rules decide who goes first. The rules tell you when to yield, and safety wins even when someone else is wrong.', facts:[['Four-way stop','First to stop goes first. If vehicles arrive together, the driver on the left yields to the driver on the right.'],['Turning left','Yield to approaching traffic and pedestrians unless a protected green arrow gives you the turn.'],['Pedestrians','Yield at crossings and never pass a vehicle stopped for a pedestrian.'],['Emergency vehicles','Pull to the right edge and stop for approaching emergency vehicles using lights or sirens.']], note:['Roundabouts','Yield to traffic already in the circle, enter to the right, and signal before your exit.'] },
  { id:'speed', label:'04 · Speed & space', title:'Make room for mistakes', summary:'The posted limit is the maximum for ideal conditions. Slow down when conditions make that speed unsafe.', facts:[['Default limits','Unless posted otherwise: 25 mph in school, business, and residential areas; 35 mph on unpaved roads; 55 mph on other roads.'],['Reckless driving','Virginia may charge reckless driving at 20+ mph over the limit or above 85 mph, regardless of the limit.'],['Following distance','Keep at least four seconds behind the vehicle ahead; add more in rain, darkness, or poor visibility.'],['Bad conditions','Slow below the posted limit when weather, traffic, or road conditions make that limit unsafe.']], note:['Space is time','A four-second gap buys time to see, decide, and brake. Following too closely leaves you less time to see, react, and brake.'] },
  { id:'school', label:'05 · Buses & crossings', title:'School bus means stop', summary:'Virginia requires drivers to stop for a school bus loading or unloading passengers—not only when its lights happen to be flashing.', facts:[['From either direction','Stop for a stopped school bus with flashing red lights and an extended stop sign.'],['Stay stopped','Remain stopped until everyone is clear and the bus begins moving again.'],['Even without signals','Stop whenever the bus is loading or unloading passengers.'],['Divided highway exception','Opposing traffic does not stop when a physical median or barrier separates the roadways.']], note:['No paint-only loophole','A center turn lane or painted lines are not a physical barrier. When in doubt, stop and make sure children can cross safely.'] },
  { id:'permit', label:'06 · Permits & licenses', title:'Permits and licenses', summary:'Different Virginia credentials authorize different vehicles, and learners have extra supervision, training, and practice requirements.', facts:[['Minimum permit age','You must be at least 15 years and 6 months old to apply.'],['Your supervisor','A licensed driver at least 21 must sit beside you; they may be 18+ if they are your legal guardian or sibling.'],['Under 18 pathway','Complete approved driver education, hold the permit at least nine months, and certify 45 practice hours including 15 after sunset.'],['Standard license','Generally covers noncommercial cars and small trucks under 26,001 pounds.'],['Motorcycles and commercial vehicles','Motorcycles require the proper designation or motorcycle-only license. Qualifying large, passenger, tank, school-bus, and hazmat vehicles require a CDL.'],['International permit','It is only a translation accompanying an existing valid license; it does not independently authorize driving.'],['Moving to Virginia','Drivers generally obtain a Virginia license within 60 days and title/register vehicles within 30 days.'],['Address and vehicle duties','Notify DMV within 30 days; maintain registration, plates, required insurance, and annual safety inspection.']], note:['Use the live DMV checklist','Document and insurance details can change. Check the official DMV website for the latest document and insurance requirements.'] },
  { id:'signals', label:'07 · Signals & markings', title:'The road has a language', summary:'Lights, lane signals, painted lines, and curbs communicate different kinds of instructions. Read all of them together.', facts:[['Turns on red','After a full stop and yield, right on red is normally allowed. Left on red is allowed only from one one-way street to another one-way street. Signs or red arrows may prohibit either.'],['Flashing signals','Flashing red = stop, then yield. Flashing yellow = slow and proceed cautiously. A flashing yellow arrow permits the turn after yielding.'],['Dark signal','Treat a completely dark signal as an all-way stop unless an officer or temporary control directs traffic.'],['Lane signals','Red X = never use the lane. Yellow X or diagonal arrow = leave it safely. Green arrow = lane open.'],['Yellow and white lines','Yellow separates opposing traffic; white separates traffic moving in the same direction. Broken lines permit movement when safe; solid lines restrict it.'],['Painted curbs','Yellow generally means parking is prohibited or restricted; always obey nearby signs.']], note:['Red arrow is not regular red','Virginia generally prohibits movement in the arrow’s direction unless a sign specifically permits it after stopping.'] },
  { id:'control', label:'08 · Vehicle control', title:'Stay in control', summary:'Good control looks uneventful: smooth inputs, early signals, clean observation, and enough room that surprises stay manageable.', facts:[['Hands','Use both hands on the outside of the wheel around 8 and 4. Keep thumbs along the rim rather than hooked inside.'],['Signals','Signal about 100 feet or three to four seconds before turning, changing lanes, or entering or leaving a highway.'],['Lane changes','Signal, check mirrors, glance over your shoulder into the blind spot, and move only when clear.'],['Backing','Turn your head and body to look through the rear window. Back slowly and scan both sides; mirrors do not show everything.'],['Over-correcting','If wheels leave the pavement, ease off the accelerator, hold steady, slow, and return gradually when clear. Do not yank the wheel.'],['Parking at a curb','Park no more than one foot away. On a two-way road park on the right; on a one-way road either side may be allowed.']], note:['Keep your inputs smooth','Sudden steering, braking, and acceleration consume traction. Smooth inputs leave traction available for the next problem.'] },
  { id:'sharing', label:'09 · Sharing the road', title:'Sharing the road', summary:'Remember to watch for everyone sharing the road, not just other cars. Pedestrians, riders, trains, trucks, and slow vehicles each create different visibility and stopping problems.', facts:[['Pedestrians','Stop for lawful crossings and people using a cane or guide dog. Never pass a vehicle stopped at a crosswalk.'],['Bicycles','Leave at least three feet when passing. Cross the center line only when the pass can be completed safely and legally.'],['Motorcycles','Give a full lane and extra following distance. Small size makes speed and distance harder to judge.'],['Light rail','Never turn in front of an approaching train. It cannot steer away and needs a long distance to stop.'],['Trucks and buses','Stay out of large blind spots and never squeeze along the right side of a truck swinging wide for a turn.'],['Trailers','Check the hitch, chains, electrical connection, and lights. Allow extra length and slow down if the trailer sways.']], note:['Visibility is asymmetric','If you cannot see a truck driver in their mirror, assume they cannot see you. Even when you have the right-of-way, leave enough space to avoid a crash.'] },
  { id:'conditions', label:'10 · Weather & night', title:'Driving in bad weather and at night', summary:'Darkness and weather reduce what the tires can hold and what your eyes can detect. Slow down when weather or darkness reduces traction or visibility.', facts:[['Night','Drive slowly enough to stop within the distance lit by your headlights. Dim high beams for approaching and closely followed vehicles.'],['Fog','Use low beams because high beams reflect glare back at you. If you cannot see safely, pull completely off the road and stop.'],['Rain','Slow down and increase following distance. If hydroplaning begins, ease off the accelerator and avoid abrupt braking or steering.'],['Snow and ice','Clear the whole vehicle, reduce speed, and make every input smooth. Bridges and shaded areas freeze first.'],['Headlights','Use them from sunset to sunrise and whenever weather requires continuous windshield-wiper use.'],['Stopping distance','Perception, reaction, and braking distance all grow with speed and poor conditions. Wet pavement can double braking distance.']], note:['Posted does not mean safe','A speed limit is the maximum for good conditions. The posted speed limit may still be too fast in rain or other poor conditions.'] },
  { id:'behavior', label:'11 · Driver condition', title:'The dangerous part is often the driver', summary:'Aggression, distraction, fatigue, alcohol, and drugs damage judgment before the driver notices how badly judgment has been damaged.', facts:[['Aggressive drivers','Do not challenge, block, race, gesture at, or follow them. Avoid eye contact and create distance.'],['Distraction','Set navigation and devices before moving or after pulling over safely. Handheld phone use while driving is illegal.'],['Fatigue','Stop at least every two hours on long trips. A safe 10–20 minute nap or a rested replacement driver actually helps; windows and loud music do not.'],['Adult DUI','For drivers age 21 or older, a BAC of 0.08% is legally considered DUI. Impaired driving can still result in a conviction below 0.08%.'],['Under 21','A BAC of at least 0.02% can trigger Virginia’s zero-tolerance consequences; 0.08% may bring adult DUI penalties.'],['Drugs','Illegal, prescription, and over-the-counter drugs can impair driving. Combining substances can multiply their effects.']], note:['Plan before drinking','Plan a safe way home before drinking.'] },
  { id:'emergencies', label:'12 · Crashes & hazards', title:'When normal driving stops', summary:'Emergencies reward simple, controlled actions. Protect people, make the scene visible, and do not turn one collision into three.', facts:[['After a crash','Stop, protect the scene, assist injured people, call police when required, and exchange identity, vehicle, and insurance information.'],['Unattended property','Make a reasonable effort to find the owner. Leave identifying information and report the crash to police within 24 hours when required.'],['Large animals','Be extra alert near dusk and dawn. If impact is unavoidable, brake firmly, remain in your lane, and stop under control instead of swerving.'],['Railroad stall','Get everyone out immediately. Move diagonally away from the tracks in the direction of the approaching train.'],['Emergency vehicles','Pull to the right and stop. Never follow an emergency vehicle using flashing lights closer than 500 feet.'],['Police stops','Pull over safely, remain calm, keep hands visible, stay in the vehicle unless directed, and reach for documents only when asked.']], note:['People before property','Call for help and prevent further injury first. If no one is injured, move to a safe location before dealing with vehicle damage.'] },
  { id:'restraints', label:'13 · Occupant safety', title:'Use the systems together', summary:'Seat belts, airbags, and child restraints are designed as a team. Removing one part makes the others less effective and sometimes more dangerous.', facts:[['Everyone buckles','Virginia requires the driver and passengers in front and rear seats to wear safety belts.'],['Correct fit','Lap belt low across the upper thighs; shoulder belt across the chest and shoulder—never behind the back or under an arm.'],['Airbags','They supplement seat belts rather than replace them. Sit back from the wheel and never place a rear-facing child seat before an active airbag.'],['Children','The driver must ensure passengers under 18 are properly secured wherever they sit.'],['Child restraint','Use an approved child seat or booster until at least age eight or until the belt fits correctly.'],['Belt fit','The child sits against the seat back with knees bent at the edge, feet supported, lap belt on thighs, and shoulder belt across chest.']], note:['No clever belt routing','Safety equipment was crash-tested in its intended position. Never place the shoulder belt under your arm or behind your back.'] },
  { id:'penalties', label:'14 · Laws & penalties', title:'Suspended is not revoked', summary:'Virginia separates temporary suspension from termination by revocation, and serious offenses can add testing, monitoring, impoundment, or jail.', facts:[['Suspension','Driving privilege is temporarily withdrawn. Reinstatement may require time, fees, proof, courses, or testing.'],['Revocation','Driving privilege is terminated. After the period ends you must reapply and satisfy license requirements again.'],['Points','Convictions add demerit points. Eligible violation-free years can add safe-driving points.'],['Medical review','DMV may request reports or testing, restrict driving, suspend driving, or close the review.'],['Open container','The passenger area includes occupant seating and areas within the driver’s reach, including an unlocked glove box.'],['DUI with a child','A juvenile passenger adds a mandatory jail term and possible extra fine. Alcohol-related suspension may also lead to immediate vehicle impoundment.']], note:['Do not drive suspended','Driving while suspended can lead to additional penalties.'] }
];

const questions = [
 {type:'sign',icon:'🛑',q:'What does an eight-sided sign always mean?',a:['Stop','Yield','Railroad crossing','School zone'],correct:0,why:'The octagon is reserved for STOP signs. Stop completely at the stop line, crosswalk, or curb.'},
 {type:'sign',icon:'▽',q:'What does a downward-pointing triangular sign mean?',a:['No passing','Yield','Stop ahead','One way'],correct:1,why:'The triangle means YIELD: slow down, prepare to stop, and let traffic and pedestrians pass.'},
 {type:'sign',icon:'◆',q:'A diamond-shaped sign usually does what?',a:['Shows a speed limit','Warns of a hazard or special condition','Marks a hospital','Requires a full stop'],correct:1,why:'Diamond signs warn about curves, merging traffic, slippery roads, and other conditions ahead.'},
 {type:'sign',icon:'⬟',q:'A five-sided sign marks what type of area?',a:['Railroad crossing','Work zone','School zone or school crossing','No-passing zone'],correct:2,why:'The pentagon shape identifies school zones and school crossings.'},
 {type:'sign',icon:'🟧',q:'Orange-and-black signs are used primarily for what?',a:['Motorist services','Construction and work zones','Historic sites','General regulations'],correct:1,why:'Orange and black warn about construction or maintenance areas.'},
 {type:'sign',icon:'🩷',q:'Pink-and-black road signs warn about what?',a:['Schools','Temporary traffic incidents','Hospitals','Railroads'],correct:1,why:'Pink signs identify temporary traffic incidents. Orange is used for construction.'},
 {type:'sign',icon:'🔴',q:'A red circle with a diagonal slash means what?',a:['The pictured action is required','The pictured action is prohibited','Proceed with caution','Services are nearby'],correct:1,why:'A circle and slash means NO—the symbol inside tells you what is prohibited.'},
 {type:'general',icon:'✕',q:'What does a red X above a lane mean?',a:['Use the lane only to pass','The lane is closed to traffic','Exit from this lane','The lane is about to open'],correct:1,why:'Never drive in a lane marked by a red X.'},
 {type:'general',icon:'🚦',q:'What should you do at a traffic signal that is completely dark?',a:['Proceed without stopping','Treat it as a yield','Treat it as an all-way stop','Wait until it turns on'],correct:2,why:'Treat an out-of-service signal as an all-way stop unless an officer or temporary control directs otherwise.'},
 {type:'sign',icon:'↗',q:'What do green road signs generally provide?',a:['Warnings','Destination and direction information','Construction instructions','Prohibitions'],correct:1,why:'Green signs provide direction and destination information. Blue points to services; brown to recreation or cultural sites.'},
 {type:'general',icon:'⏱️',q:'What following distance does Virginia DMV recommend for teen drivers in normal conditions?',a:['Two seconds','Three seconds','Four seconds','Six car lengths'],correct:2,why:'Keep at least four seconds between you and the vehicle ahead, and increase the gap in poor conditions.'},
 {type:'general',icon:'🚌',q:'A school bus ahead is loading children but its red lights are not flashing. What must you do?',a:['Pass slowly','Stop','Honk and proceed','Stop only if its sign is extended'],correct:1,why:'Virginia requires a stop whenever a school bus is loading or unloading passengers, even if its signals are not activated.'},
 {type:'general',icon:'🛣️',q:'When may opposing traffic pass a stopped school bus?',a:['On any four-lane road','When separated by a physical median or barrier','When no children are visible','Whenever the speed limit is 45 mph'],correct:1,why:'Opposing traffic need not stop only when a physical median or barrier separates the roadways.'},
 {type:'general',icon:'🏘️',q:'Unless posted otherwise, what is the maximum speed in Virginia residential areas?',a:['15 mph','25 mph','35 mph','45 mph'],correct:1,why:'The default maximum is 25 mph in school, business, and residential areas unless signs say otherwise.'},
 {type:'general',icon:'🚓',q:'Virginia may charge reckless driving when you drive:',a:['5 mph over any limit','10 mph over any limit','20+ mph over the limit or above 85 mph','Only above 100 mph'],correct:2,why:'Driving 20 or more mph over the limit, or over 85 mph regardless of the limit, can be charged as reckless driving.'},
 {type:'general',icon:'4',q:'At a four-way stop, two vehicles arrive together. Who yields?',a:['The driver on the right','The driver on the left','The larger vehicle','The vehicle going straight'],correct:1,why:'When vehicles arrive at the same time, the driver on the left yields to the driver on the right.'},
 {type:'general',icon:'↺',q:'Before entering a roundabout, you must:',a:['Stop every time','Yield to traffic already in the circle','Enter to the left','Signal left until you exit'],correct:1,why:'Yield to vehicles already in the roundabout, enter to the right when clear, and signal before exiting.'},
 {type:'general',icon:'🚑',q:'An emergency vehicle approaches using its siren and flashing lights. You should:',a:['Speed up to clear the road','Stop exactly where you are','Pull to the right edge and stop','Turn at the next intersection'],correct:2,why:'Pull to the right edge of the road and stop until the emergency vehicle passes.'},
 {type:'general',icon:'🌧️',q:'In heavy rain, the posted speed limit is:',a:['Always the required speed','The minimum safe speed','The maximum only when conditions are safe','Optional for permit holders'],correct:2,why:'A posted limit is the maximum under ideal conditions. You can be cited for driving too fast for conditions even below that limit.'},
 {type:'general',icon:'📱',q:'Which statement about phone use while driving in Virginia is correct?',a:['It is allowed below 25 mph','It is allowed at red lights','Using a handheld phone while driving is illegal','Only texting is prohibited'],correct:2,why:'Virginia prohibits drivers from holding a handheld personal communications device while driving, with limited emergency exceptions.'},
 {type:'general',icon:'🎂',q:'What is the minimum age to apply for a Virginia learner’s permit?',a:['15 years','15 years 6 months','16 years','16 years 3 months'],correct:1,why:'You must be at least 15 years and 6 months old to apply for a learner’s permit.'},
 {type:'general',icon:'👥',q:'Who may normally supervise a Virginia permit holder from the adjacent seat?',a:['Any adult passenger','A licensed driver age 21+','Any licensed driver age 18+','Only a driving instructor'],correct:1,why:'The supervising licensed driver must be 21+, or 18+ if they are the permit holder’s legal guardian or sibling.'},
 {type:'general',icon:'🌙',q:'For a driver under 18, how many certified practice hours must occur after sunset?',a:['5','10','15','20'],correct:2,why:'Of the required 45 practice hours, at least 15 must occur after sunset.'},
 {type:'general',icon:'🗓️',q:'How long must a driver under 18 generally hold a Virginia learner’s permit before licensing?',a:['60 days','6 months','9 months','12 months'],correct:2,why:'Drivers under 18 must hold the permit for at least nine months and complete approved driver education.'},
 {type:'general',icon:'💡',q:'When turning left without a green arrow, you must yield to:',a:['Only pedestrians','Only oncoming trucks','Oncoming traffic and pedestrians','Vehicles behind you'],correct:2,why:'A steady green permits the turn only when clear; yield to approaching traffic and pedestrians.'},
 {type:'general',icon:'🚶',q:'A car ahead is stopped at a crosswalk for a pedestrian. You should:',a:['Pass carefully on the left','Honk so the pedestrian waits','Stop and do not pass','Pass on the shoulder'],correct:2,why:'Never pass a vehicle stopped at a crosswalk; a pedestrian may be hidden from your view.'},
 {type:'general',icon:'🛞',q:'Your vehicle has ABS and you must brake suddenly. What should you do?',a:['Pump the brake rapidly','Press firmly and hold the brake','Use only the parking brake','Turn off the engine'],correct:1,why:'With anti-lock brakes, press the brake firmly and hold it. Pumping interferes with the system.'},
 {type:'general',icon:'🟡',q:'A traffic light turns yellow as you approach. What does it mean?',a:['Speed up before red','Stop if you can do so safely','You always have right-of-way','Cross traffic must wait indefinitely'],correct:1,why:'A steady yellow warns the signal is changing to red. Stop if you can do so safely.'},
 {type:'general',icon:'↔',q:'A broken yellow center line means:',a:['Passing is never allowed','Passing is allowed when safe','Traffic moves in the same direction','The lane is for parking'],correct:1,why:'A broken yellow line separates opposing traffic and allows passing when the way is clear and it is otherwise legal.'},
 {type:'general',icon:'═',q:'Two solid yellow center lines mean:',a:['Passing is allowed both ways','Passing is prohibited in both directions','Traffic moves one way','Only trucks may pass'],correct:1,why:'Double solid yellow lines prohibit passing in both directions, though turns into driveways may be permitted when safe.'},
 {type:'general',icon:'🚲',q:'When passing a bicyclist, Virginia drivers should leave at least:',a:['One foot','Two feet','Three feet','One car length'],correct:2,why:'Virginia law requires at least three feet of clearance when passing a bicyclist.'},
 {type:'general',icon:'🌫️',q:'Which headlights are best in fog?',a:['High beams','Low beams','Parking lights only','Hazard lights only'],correct:1,why:'Use low beams in fog. High beams reflect off the moisture and reduce visibility.'},
 {type:'general',icon:'🚗',q:'Before changing lanes, you should:',a:['Check only the rearview mirror','Signal, check mirrors, and check your blind spot','Honk twice and move','Brake sharply'],correct:1,why:'Signal, check mirrors, and turn your head to check the blind spot before moving.'},
 {type:'general',icon:'🛑',q:'Where should you stop when there is a stop line?',a:['After the crosswalk','At the stop line','In the intersection','Where you can see best, even past the line'],correct:1,why:'Stop before the marked stop line. If none exists, stop before the crosswalk or intersection.'},
 {type:'general',icon:'🧊',q:'If your vehicle begins to skid, you should first:',a:['Slam on the brakes','Steer in the direction you want to go','Turn sharply against the skid','Accelerate'],correct:1,why:'Ease off the accelerator and steer toward the path you want the vehicle to follow. Avoid sudden braking.'},
 {type:'general',icon:'🚧',q:'What should you do when approaching a work zone?',a:['Maintain speed to reduce congestion','Slow down and obey signs and flaggers','Change lanes without signaling','Follow workers’ vehicles closely'],correct:1,why:'Slow down, increase following distance, and obey temporary signs and flaggers in work zones.'},
 {type:'general',icon:'🍺',q:'For drivers under 21, Virginia’s alcohol rule is best described as:',a:['One drink is allowed','Zero tolerance','Legal below 0.08%','Allowed with an adult passenger'],correct:1,why:'Virginia applies zero-tolerance alcohol rules to drivers under 21.'},
 {type:'general',icon:'🔄',q:'When making a U-turn, you must:',a:['Make it anywhere without a sign','Have a clear view and ensure it is legal and safe','Always use a driveway','Yield only to trucks'],correct:1,why:'U-turns are only permitted where legal and safe, with enough visibility and no prohibiting sign.'},
 {type:'general',icon:'🛤️',q:'At a railroad crossing with flashing red lights, you must:',a:['Slow and look','Stop and wait until the lights stop and the way is clear','Drive around the gate if no train is visible','Stop only for passenger trains'],correct:1,why:'Stop for flashing signals or a lowered gate and wait until the warning ends and tracks are clear.'},
 {type:'general',icon:'↘',q:'Before exiting a roundabout, you should:',a:['Signal right','Signal left','Stop in the circle','Move to the center'],correct:0,why:'Use your right turn signal to tell others you are leaving the roundabout.'},
 {type:'general',icon:'💺',q:'The safest practice for seat belts is:',a:['Only the driver needs one','Only front-seat occupants need them','Every occupant buckles up on every trip','They are optional below 25 mph'],correct:2,why:'Everyone should buckle up every trip. The driver should make sure passengers are restrained.'}
];

// Expanded from every named subsection of the April 2026 Virginia Driver's
// Manual. `topic` makes coverage auditable and gives missed-answer reviews a
// useful label instead of leaving the question bank as one enormous soup.
questions.push(
 {type:'general',topic:'Testing · Road skills test',icon:'🚙',q:'Which vehicle may you use for a Virginia road skills test?',a:['An autocycle','A vehicle with valid inspection, registration, working safety equipment, and plates','Any borrowed vehicle regardless of registration','A vehicle without working turn signals'],correct:1,why:'You provide a properly equipped, registered, inspected vehicle. The road skills test cannot be taken in an autocycle.'},
 {type:'general',topic:'Testing · Road skills test',icon:'📅',q:'After failing a DMV road skills test, how long must you wait before trying again?',a:['Until the next business day','Two days','Seven days','Fifteen days'],correct:1,why:'The Virginia manual requires a two-day wait after a failed road skills test.'},
 {type:'general',topic:'Testing · Vision screening',icon:'👓',q:'If you need glasses or contacts to pass the DMV vision screening, what happens?',a:['You may drive without them after one year','Your license receives a corrective-lens restriction','You may only drive at night','You must retake the knowledge exam monthly'],correct:1,why:'You must wear the lenses while driving, and the license displays a C restriction.'},
 {type:'general',topic:'Testing · Vision standards',icon:'👁️',q:'What visual acuity is required for an unrestricted Virginia driver’s license?',a:['20/20 or better','20/30 or better','20/40 or better in one or both eyes','20/70 or better'],correct:2,why:'The unrestricted standard is 20/40 or better in one or both eyes plus the required horizontal field of vision.'},
 {type:'general',topic:'Testing · Vision standards',icon:'🌤️',q:'A daylight-only restricted license permits driving during what period?',a:['Sunrise to sunset exactly','A half-hour before sunrise through a half-hour after sunset','A half-hour after sunrise through a half-hour before sunset','Only from 9 a.m. to 5 p.m.'],correct:2,why:'The daylight-only period begins one-half hour after sunrise and ends one-half hour before sunset.'},

 {type:'general',topic:'Signals · Traffic signals',icon:'↪️',q:'Before making a permitted right turn on red, you must:',a:['Slow down but keep moving','Stop completely and yield to traffic and pedestrians','Yield only to vehicles from the left','Honk and turn immediately'],correct:1,why:'Come to a complete stop, look both ways, and yield before turning unless a sign or red arrow prohibits it.'},
 {type:'general',topic:'Signals · Traffic signals',icon:'↩️',q:'When may a driver turn left on red in Virginia?',a:['From any street onto a one-way street','From a one-way street onto another one-way street after stopping and yielding','Only from a two-way street','Never'],correct:1,why:'A left on red is permitted from one one-way street to another after a complete stop and yield, unless prohibited.'},
 {type:'general',topic:'Signals · Traffic signals',icon:'🟡',q:'What does a flashing yellow signal mean?',a:['Stop completely','Slow down and proceed with caution','The road is closed','Speed up before it turns red'],correct:1,why:'A flashing yellow identifies a higher-than-normal hazard; slow and proceed cautiously.'},
 {type:'general',topic:'Signals · Lane use signals',icon:'↙️',q:'A yellow diagonal downward arrow over a lane tells you to:',a:['Enter that lane immediately','Move out of that lane as soon as safely possible','Stop under the signal','Use the lane only for passing'],correct:1,why:'A yellow X or diagonal downward arrow warns that the lane is closing; leave it safely.'},
 {type:'sign',topic:'Signs · Colors',icon:'🟦',q:'Blue-and-white road signs generally identify:',a:['Motorist services','Construction zones','Regulations','Scenic or historical sites'],correct:0,why:'Blue signs provide motorist-service information. Brown signs identify historical, cultural, or recreational interests.'},
 {type:'sign',topic:'Signs · Colors',icon:'🟫',q:'Brown-and-white signs generally point to:',a:['Hospitals and fuel','Historical, cultural, or recreational sites','Temporary incidents','Speed limits'],correct:1,why:'Brown signs advise of historical, cultural, or recreational interests.'},
 {type:'sign',topic:'Signs · Shapes',icon:'▭',q:'A vertical rectangular sign usually gives:',a:['A warning about a hazard','Instructions or a regulation','Railroad information only','School-crossing information'],correct:1,why:'Vertical rectangles generally give instructions or state the law; horizontal rectangles often provide directions or information.'},
 {type:'sign',topic:'Signs · Regulatory signs',icon:'🚫',q:'A DO NOT ENTER or WRONG WAY sign means:',a:['Traffic may enter carefully','You cannot drive in that direction','The lane is reserved for buses','The road becomes one-way later'],correct:1,why:'These regulatory signs warn that entering would put you against traffic and risk a head-on crash.'},
 {type:'sign',topic:'Signs · Warning signs',icon:'↝',q:'A winding-road warning sign means you should:',a:['Maintain speed through several curves','Slow down for a series of turns or curves','Stop before the first curve','Pass before the curves begin'],correct:1,why:'Slow down for better control through the series of curves.'},
 {type:'sign',topic:'Signs · Warning signs',icon:'✕',q:'A railroad crossbuck warns that:',a:['A school crossing is ahead','Railroad tracks cross the road','The road ends','Passing is required'],correct:1,why:'Look, listen, slow down, and be ready to stop. Trains may approach from either direction and on any track.'},
 {type:'general',topic:'Signs · Work zones',icon:'👷',q:'When may you change lanes after passing through a work zone?',a:['As soon as you pass the first cone','Only after you are completely clear of the work zone','Whenever workers are not visible','Only while inside the work zone'],correct:1,why:'Stay in your lane and maintain speed while leaving; do not change lanes until completely clear.'},
 {type:'general',topic:'Markings · Pavement markings',icon:'〰️',q:'A broken yellow line beside a solid yellow line means:',a:['Passing is allowed from both sides','Passing is allowed only from the side with the broken line','Passing is prohibited from both sides','Traffic flows in the same direction'],correct:1,why:'The broken-line side may pass when safe; the solid-line side may not.'},
 {type:'general',topic:'Markings · Pavement markings',icon:'◇',q:'A white diamond painted in a lane usually means:',a:['The lane is reserved for special traffic such as HOV vehicles','The pavement is slippery','A railroad crossing is ahead','Parking is allowed'],correct:0,why:'A diamond marks a reserved lane, often for high-occupancy vehicles or another designated use.'},
 {type:'general',topic:'Markings · Painted curbs',icon:'🟨',q:'What does a yellow-painted curb generally mean?',a:['Parking is encouraged','Parking is prohibited or restricted as posted','The curb is privately owned','Only motorcycles may park'],correct:1,why:'Yellow curbs identify areas where parking is prohibited or restricted; obey accompanying signs.'},

 {type:'general',topic:'Safe driving · Hand position',icon:'👐',q:'Where does the Virginia manual recommend placing your hands on the steering wheel?',a:['At 10 and 2','At 8 and 4 on the outside of the wheel','Both hands at the top','One hand at 12'],correct:1,why:'Using the outside of the wheel around 8 and 4 improves control and reduces air-bag injury risk.'},
 {type:'general',topic:'Safe driving · Stopping',icon:'💧',q:'Wet pavement can do what to your braking distance?',a:['Cut it in half','Have no effect','Double it','Always triple it'],correct:2,why:'The manual notes that wet pavement can double braking distance.'},
 {type:'general',topic:'Safe driving · Right-of-way',icon:'🚒',q:'How closely may you follow an emergency vehicle displaying flashing lights?',a:['At least 100 feet behind','At least 250 feet behind','Never closer than 500 feet','Any distance if traffic is slow'],correct:2,why:'Never follow an emergency vehicle closer than 500 feet while its lights are flashing.'},
 {type:'general',topic:'Safe driving · Roundabouts',icon:'🔄',q:'Which direction does traffic move through a Virginia roundabout?',a:['Clockwise','Counterclockwise','Either direction','Straight across the center island'],correct:1,why:'Entering traffic yields and travels counterclockwise around the center island.'},
 {type:'general',topic:'Safe driving · Changing lanes',icon:'↔️',q:'What is the final check before moving into another lane?',a:['Look only in the rearview mirror','Glance over your shoulder into the blind spot','Tap the brakes','Turn off your signal'],correct:1,why:'Mirrors do not show every danger area; quickly check the blind spot over your shoulder.'},
 {type:'general',topic:'Safe driving · Passing',icon:'⛰️',q:'Passing is generally unlawful and unsafe:',a:['On a straight road with a broken line','On hills, curves, intersections, or railroad crossings','On a multilane highway','When the vehicle ahead is below the limit'],correct:1,why:'Limited sight distance makes passing at hills, curves, intersections, and rail crossings unsafe and generally illegal.'},
 {type:'general',topic:'Safe driving · Over-correcting',icon:'🛞',q:'If your right wheels leave the pavement, what should you avoid?',a:['Easing off the accelerator','Holding the wheel firmly','Jerking the steering wheel sharply back toward the road','Checking traffic before returning'],correct:2,why:'A sharp correction can cause a skid or rollover. Slow gradually and return when clear.'},
 {type:'general',topic:'Safe driving · Turning',icon:'↰',q:'Two approaching vehicles both intend to turn left. How should they pass?',a:['Driver sides beside each other','Passenger sides beside each other, turning in front of one another','One must reverse','Both must turn behind each other'],correct:1,why:'Both turn in front of each other so their passenger sides pass beside one another.'},
 {type:'general',topic:'Safe driving · U-turns',icon:'↶',q:'In Virginia cities, towns, and business districts, U-turns are allowed:',a:['Anywhere the road is wide enough','Only at intersections unless prohibited','Only on highways','Only between intersections'],correct:1,why:'In these areas U-turns are allowed only at intersections. Never make one on a highway or where signs prohibit it.'},
 {type:'general',topic:'Safe driving · Turn signals',icon:'💡',q:'How far before a turn should you normally signal?',a:['25 feet','50 feet','100 feet or about three to four seconds','Only while turning'],correct:2,why:'Signal about three to four seconds, or 100 feet, before the turn.'},
 {type:'general',topic:'Safe driving · Space cushion',icon:'⭕',q:'A space cushion should exist:',a:['Only in front of your vehicle','Only behind your vehicle','On all sides of your vehicle','Only on interstate highways'],correct:2,why:'Space on every side gives you time and room to react to hazards and other drivers’ mistakes.'},
 {type:'general',topic:'Safe driving · Following distance',icon:'🚚',q:'When should you increase the normal following distance?',a:['When roads are clear and dry','Behind a motorcycle, large vehicle, or in poor conditions','Only below 25 mph','When another driver follows you closely'],correct:1,why:'Motorcycles, large vehicles, darkness, weather, and limited visibility all call for more following space.'},
 {type:'general',topic:'Safe driving · Searching',icon:'🔍',q:'About how often should you check your rearview mirror?',a:['Every two seconds','Every ten seconds','Once per mile','Only before braking'],correct:1,why:'The manual recommends checking behind frequently—about every 10 seconds.'},
 {type:'general',topic:'Safe driving · Blind spots',icon:'👀',q:'How should side mirrors be adjusted?',a:['So half the mirror shows your own car','So you can barely see the sides of your vehicle','Straight down at the rear tires','Both pointed at the same lane'],correct:1,why:'Adjust side mirrors so your vehicle’s sides are barely visible, then still check blind spots over your shoulder.'},
 {type:'general',topic:'Sharing the road · Pedestrians',icon:'🦯',q:'What must you do for a pedestrian using a white cane or guide dog?',a:['Honk before passing','Come to a full stop','Proceed if outside a marked crosswalk','Yield only at a traffic signal'],correct:1,why:'A cane or guide dog indicates blindness or vision impairment; drivers must come to a full stop.'},
 {type:'general',topic:'Sharing the road · Bicycles',icon:'🚲',q:'May a driver cross a double yellow line to pass a bicyclist?',a:['Never','Yes, when it can be done safely and legally under Virginia’s passing rule','Only after dark','Only in a school zone'],correct:1,why:'Virginia permits crossing the center line to give a bicyclist safe clearance when the maneuver can be completed safely.'},
 {type:'general',topic:'Sharing the road · Motorcycles',icon:'🏍️',q:'Why should you leave extra following space behind a motorcycle?',a:['Motorcycles always exceed the limit','They can stop quickly and hazards affect them differently','They may legally ignore signals','Their brake lights are blue'],correct:1,why:'Motorcycles can stop quickly and may need sudden changes for road hazards; provide extra space.'},
 {type:'general',topic:'Sharing the road · Light rail',icon:'🚈',q:'When tracks cross the roadway, you should:',a:['Turn in front of an approaching light-rail train','Never turn in front of an approaching train','Stop on the tracks to check traffic','Race the train through the crossing'],correct:1,why:'Light-rail vehicles cannot swerve and require long stopping distances; never turn in front of one.'},
 {type:'general',topic:'Sharing the road · Low-speed vehicles',icon:'🔋',q:'A low-speed vehicle is generally restricted to roads with a posted limit of:',a:['25 mph or less','35 mph or less','45 mph or less','Any speed'],correct:1,why:'Low-speed vehicles generally operate on roads posted at 35 mph or less, subject to local restrictions.'},
 {type:'general',topic:'Sharing the road · Trucks and buses',icon:'🚛',q:'Why should you avoid cutting closely in front of a large truck?',a:['Trucks may not use brakes','Large vehicles need much more room to stop','Truck drivers cannot see forward','It is only rude, not dangerous'],correct:1,why:'Trucks and buses are heavy and require substantially greater stopping distance.'},
 {type:'general',topic:'Sharing the road · Trucks and buses',icon:'↗️',q:'When a large truck swings left before a right turn, you should:',a:['Pass on its right','Stay back and never squeeze between it and the curb','Honk and enter the gap','Stop directly beside its cab'],correct:1,why:'Large vehicles may need a wide swing. The space on the right is not an invitation to pass.'},
 {type:'general',topic:'Sharing the road · Trailers',icon:'🛻',q:'If a light trailer begins to sway, you should:',a:['Accelerate sharply','Slow down','Turn rapidly against the sway','Apply only the trailer parking brake'],correct:1,why:'Slow down and regain control; sudden steering or acceleration can worsen trailer sway.'},
 {type:'general',topic:'Safe driving · Backing',icon:'↩️',q:'What is the safest basic method for backing?',a:['Depend entirely on mirrors','Turn your body and head, look through the rear window, and back slowly','Open the door and look down','Accelerate to finish quickly'],correct:1,why:'Mirrors do not give a complete view. Look back directly, move slowly, and check both sides.'},
 {type:'general',topic:'Safe driving · Parking',icon:'🅿️',q:'When parking beside a curb, your vehicle may be no more than:',a:['Six inches away','One foot away','Two feet away','Three feet away'],correct:1,why:'Virginia’s manual says you may not park more than one foot from the curb.'},
 {type:'general',topic:'Safe driving · Visibility',icon:'🧼',q:'Before driving, good visibility requires you to:',a:['Clear only a small spot on the windshield','Clear windows, mirrors, lights, and reflectors of obstruction','Rely on windshield wipers to remove ice while moving','Keep snow on the roof for traction'],correct:1,why:'Remove snow, ice, dirt, or anything else that blocks your view or hides your vehicle’s lights.'},
 {type:'general',topic:'Safe driving · Lights',icon:'🔦',q:'When must headlights be used in Virginia?',a:['Only after midnight','From sunset to sunrise and whenever windshield wipers are in use because of weather','Only on unlit roads','Whenever driving below the speed limit'],correct:1,why:'Use headlights from sunset to sunrise and during weather that requires continuous windshield-wiper use.'},
 {type:'general',topic:'Hazards · Night driving',icon:'🌙',q:'At night, you should drive slowly enough to:',a:['Stop within the distance illuminated by your headlights','Keep up with the fastest vehicle','Use high beams around every vehicle','Avoid checking mirrors'],correct:0,why:'Do not overdrive your headlights; you must be able to stop within the visible distance.'},
 {type:'general',topic:'Hazards · Fog',icon:'🌫️',q:'If fog becomes so dense that you cannot see safely, you should:',a:['Use high beams and continue','Pull completely off the road to a safe place and stop','Follow taillights closely','Drive on the center line'],correct:1,why:'Use low beams while moving; if visibility becomes unsafe, pull fully off the roadway and stop safely.'},
 {type:'general',topic:'Hazards · Rain',icon:'🌧️',q:'If your vehicle hydroplanes, you should:',a:['Brake hard immediately','Ease off the accelerator and avoid sudden braking or steering','Accelerate until the tires grip','Turn sharply toward the shoulder'],correct:1,why:'Ease off the gas and keep steering steady until the tires regain contact with the road.'},
 {type:'general',topic:'Hazards · Snow',icon:'❄️',q:'On snow or ice, the best driving inputs are:',a:['Sudden and forceful','Smooth and gradual','Fast to build momentum','Alternating hard braking and acceleration'],correct:1,why:'Slow down and make steering, braking, and acceleration smooth to preserve traction.'},
 {type:'general',topic:'Dangerous behavior · Aggressive driving',icon:'😠',q:'If another driver behaves aggressively, you should:',a:['Challenge them by speeding up','Avoid eye contact, stay out of the way, and do not retaliate','Block them from passing','Follow them to record their plate'],correct:1,why:'Create distance and do not challenge or engage an aggressive driver.'},
 {type:'general',topic:'Dangerous behavior · Distracted driving',icon:'📵',q:'What is the safest time to adjust navigation or send a message?',a:['At a red light','While moving slowly','Before driving or after pulling over safely','While using cruise control'],correct:2,why:'Driving requires full attention. Set devices before moving or stop safely before interacting with them.'},
 {type:'general',topic:'Dangerous behavior · Drowsy driving',icon:'😴',q:'Which is a reliable response to drowsiness?',a:['Turn up the radio','Open a window','Stop safely and take a 10–20 minute nap','Drink an energy drink and continue'],correct:2,why:'Windows, gum, loud music, and caffeine are not reliable. Rest or switch to a well-rested driver.'},
 {type:'general',topic:'Dangerous behavior · Alcohol and drugs',icon:'🍺',q:'For a driver age 21 or older, what BAC is legally considered DUI?',a:['0.02%','0.05%','0.08%','0.10%'],correct:2,why:'A BAC of 0.08% or higher is DUI for drivers age 21 or older, though impairment can support a conviction at a lower BAC.'},
 {type:'general',topic:'Safe driving · Traffic crashes',icon:'💥',q:'After a crash involving injury, what should you do?',a:['Leave if your car can move','Stop, assist the injured, notify police, and exchange required information','Exchange names only and leave','Move injured people immediately in every case'],correct:1,why:'Stop, protect the scene, help the injured, call police, and exchange information. Do not leave the scene.'},
 {type:'general',topic:'Safe driving · Deer hazards',icon:'🦌',q:'If hitting a deer becomes unavoidable, you should:',a:['Swerve into the other lane','Brake firmly, stay in your lane, and stop under control','Accelerate past it','Turn off your headlights'],correct:1,why:'Swerving can cause a worse crash. Brake firmly, stay in the lane, and make a controlled stop.'},
 {type:'general',topic:'Safe driving · Traffic stops',icon:'👮',q:'During a police traffic stop, where should your hands remain?',a:['Hidden under the dashboard','Visible, preferably on the steering wheel','Searching the glove compartment','Outside the window'],correct:1,why:'Remain calm, stay in the vehicle unless directed otherwise, and keep your hands visible.'},

 {type:'general',topic:'Restraints · Seat belts',icon:'💺',q:'How should a lap belt fit?',a:['Across the stomach','Low across the lap and against the thighs','Loosely across the hips','Under one leg'],correct:1,why:'The lap belt belongs low on the pelvis against the thighs; the shoulder belt crosses the chest and shoulder.'},
 {type:'general',topic:'Restraints · Air bags',icon:'🎈',q:'Air bags are designed to:',a:['Replace seat belts','Work with seat belts, not replace them','Protect only unbelted occupants','Deploy in every minor bump'],correct:1,why:'Air bags supplement properly worn seat belts. They are not a substitute for buckling up.'},
 {type:'general',topic:'Restraints · Child safety seats',icon:'🧒',q:'Virginia children generally need an approved child restraint until at least:',a:['Age 4','Age 6','Age 8','Age 12'],correct:2,why:'Children must use a child safety seat or booster until at least age eight or until a proper seat-belt fit is attained.'},

 {type:'general',topic:'Penalties · Suspension',icon:'⏸️',q:'A license suspension means your driving privilege is:',a:['Permanently terminated','Temporarily withdrawn','Unchanged except at night','Transferred to another state'],correct:1,why:'Suspension is temporary withdrawal, subject to the suspension period and reinstatement requirements.'},
 {type:'general',topic:'Penalties · Revocation',icon:'⛔',q:'A license revocation means your driving privilege is:',a:['Temporarily paused','Terminated, requiring reapplication after the revocation period','Limited to work trips','Valid only with a passenger'],correct:1,why:'After revocation, you must reapply and meet testing, documentation, and fee requirements.'},
 {type:'general',topic:'Penalties · Conviction-related actions',icon:'⚖️',q:'Which conviction can cause suspension or revocation?',a:['Using a turn signal too early','DUI or leaving an injury crash without identifying yourself','Parking one inch from a curb','Driving below the limit in rain'],correct:1,why:'Serious convictions including DUI and hit-and-run involving injury or death can suspend or revoke driving privileges.'},
 {type:'general',topic:'Penalties · Driver Improvement Program',icon:'📈',q:'Virginia’s Driver Improvement Program primarily tracks:',a:['Vehicle fuel economy','Safe-driving and demerit points on driving records','Parking availability','Annual mileage'],correct:1,why:'The program assigns demerit points for convictions and safe-driving points for eligible years without violations.'},
 {type:'general',topic:'Penalties · Medical review',icon:'🩺',q:'What may DMV require through medical review?',a:['A different vehicle color','Medical or vision reports and possible driving restrictions','A commercial license','Monthly vehicle inspections'],correct:1,why:'DMV may request reports, require testing, restrict or suspend privileges, or end the review without further action.'},
 {type:'general',topic:'Penalties · Insurance monitoring',icon:'🛡️',q:'What does Virginia DMV’s insurance-monitoring program verify?',a:['That every driver has collision coverage','That registered vehicle owners comply with liability-insurance requirements','That every vehicle has roadside assistance','That insurance prices are equal'],correct:1,why:'DMV monitors whether owners of valid registrations comply with Virginia liability-insurance laws.'},
 {type:'general',topic:'Penalties · Child-support requirements',icon:'📄',q:'Failure to satisfy certain child-support requirements can result in:',a:['A warning only','Suspension of driving privileges','Automatic vehicle ownership','A lower insurance premium'],correct:1,why:'Virginia may suspend driving privileges for failure to meet applicable child-support-related requirements.'},
 {type:'general',topic:'Penalties · Administrative alcohol suspension',icon:'🧪',q:'Under implied-consent rules, refusing a required breath or blood test can:',a:['Have no licensing consequence','Lead to administrative license suspension','Replace a DUI charge with a warning','Automatically dismiss the traffic stop'],correct:1,why:'Refusal carries separate administrative licensing consequences in addition to other possible charges.'},
 {type:'general',topic:'Penalties · Open containers',icon:'🍾',q:'For Virginia’s open-container rule, the passenger area includes:',a:['Only the driver’s seat','Areas seating occupants and areas within the driver’s reach, including an unlocked glove box','A locked trunk only','The roof rack'],correct:1,why:'The passenger area includes seating areas and places within reach such as an unlocked glove compartment.'},
 {type:'general',topic:'Penalties · DUI with children',icon:'🚸',q:'A DUI committed with a passenger age 17 or younger carries:',a:['No additional consequence','An additional mandatory jail term and possible added fine','Only a written warning','A parking citation'],correct:1,why:'Virginia adds a mandatory five-day jail term and may add a $500–$1,000 fine for DUI with a juvenile passenger.'},
 {type:'general',topic:'Penalties · Vehicle impoundment',icon:'🔒',q:'Driving after an alcohol-related suspension can cause the vehicle to be immediately impounded for:',a:['24 hours','Seven days','30 days','One year'],correct:2,why:'The vehicle is immediately impounded for 30 days, with a possible additional court-ordered period after conviction.'},
 {type:'general',topic:'Penalties · Restitution',icon:'💵',q:'After certain incidents, local law may require a driver to repay:',a:['Only gasoline costs','Emergency response costs up to the allowed limit','Every resident’s taxes','The vehicle manufacturer'],correct:1,why:'Depending on local law, a driver may owe restitution for law-enforcement, fire, rescue, and emergency medical response costs.'},
 {type:'general',topic:'Penalties · Under-21 alcohol',icon:'0️⃣',q:'A Virginia driver under 21 may be convicted of illegal alcohol consumption with a BAC of:',a:['At least 0.02% but below 0.08%','Only 0.08% or higher','Exactly 0.01% only','At least 0.10%'],correct:0,why:'Virginia’s under-21 zero-tolerance threshold begins at 0.02%; 0.08% or higher can bring adult DUI penalties.'},

 {type:'general',topic:'License types · Learner’s permit',icon:'🪪',q:'What must a learner’s-permit holder carry when driving?',a:['A photocopy stored at home','The valid learner’s permit','Only a school ID','A vehicle title'],correct:1,why:'Whenever you drive, you must carry the valid license or learner’s permit authorizing you to drive.'},
 {type:'general',topic:'License types · Driver’s license',icon:'🚗',q:'A standard Virginia driver’s license generally covers a noncommercial vehicle under:',a:['10,001 pounds','18,001 pounds','26,001 pounds','40,001 pounds'],correct:2,why:'It generally authorizes cars and small trucks under 26,001 pounds that are exempt from CDL requirements.'},
 {type:'general',topic:'License types · Commercial and school bus',icon:'🚌',q:'A CDL is required for a school bus designed for:',a:['Six occupants','Ten occupants','16 or more occupants including the driver','Only the driver'],correct:2,why:'Vehicles including school buses designed for 16 or more occupants generally require commercial licensing.'},
 {type:'general',topic:'License types · Motorcycle permit',icon:'🏍️',q:'What credential must a new rider obtain before practicing on public roads?',a:['A standard learner’s permit automatically covers motorcycles','A motorcycle learner’s permit or motorcycle designation','Only a vehicle registration','An international driving permit'],correct:1,why:'Motorcycle operation requires the appropriate motorcycle learner’s permit, endorsement, or motorcycle-only license.'},
 {type:'general',topic:'License types · Motorcycle license',icon:'🪖',q:'To operate a motorcycle after the learning stage, your Virginia credential must show:',a:['A motorcycle designation or you must hold a motorcycle-only license','A school-bus endorsement','A commercial hazmat endorsement','No special designation'],correct:0,why:'A standard license does not automatically authorize motorcycle operation; the proper designation or motorcycle-only license is required.'},
 {type:'general',topic:'License types · International license',icon:'🌍',q:'An international driving permit by itself:',a:['Is a valid Virginia license','Is only a translation and does not independently authorize driving','Replaces a suspended license','Allows commercial driving'],correct:1,why:'It is a translation accompanying an existing valid license, not a standalone driver’s license.'},

 {type:'general',topic:'Other information · License delivery',icon:'📬',q:'How does Virginia DMV normally deliver a newly issued license?',a:['It is printed at the service counter','It is mailed to the address on record','It is emailed as a PDF','It must be picked up at a police station'],correct:1,why:'For security, DMV mails licenses rather than issuing them over the counter.'},
 {type:'general',topic:'Other information · Address changes',icon:'🏠',q:'How soon must you notify Virginia DMV after changing address?',a:['Within 10 days','Within 30 days','Within 60 days','At the next renewal only'],correct:1,why:'Virginia requires DMV notification within 30 days, and the postal service will not forward the license.'},
 {type:'general',topic:'Other information · New residents',icon:'📦',q:'A new Virginia resident who drives must generally obtain a Virginia license within:',a:['15 days','30 days','60 days','One year'],correct:2,why:'The manual gives new residents 60 days to obtain a Virginia driver’s license.'},
 {type:'general',topic:'Other information · Registration and plates',icon:'🔖',q:'A new resident must generally title and register a vehicle in Virginia within:',a:['10 days','30 days','60 days','90 days'],correct:1,why:'Vehicles must generally be titled and registered and receive Virginia plates within 30 days of moving.'},
 {type:'general',topic:'Other information · Safety inspections',icon:'🔧',q:'How often must a Virginia vehicle pass its regular safety inspection?',a:['Every six months','Annually','Every two years','Only when sold'],correct:1,why:'Virginia vehicles must pass an annual safety inspection and display a valid inspection sticker.'},
 {type:'general',topic:'Other information · Tire safety',icon:'🪙',q:'In the penny tread test, adequate tread covers:',a:['Any part of Lincoln’s head','The entire penny','Lincoln’s date only','Nothing on the penny'],correct:0,why:'Place Lincoln’s head into the lowest-looking groove; if any part of his head is covered, the manual describes the tread as adequate.'},
 {type:'general',topic:'Other information · Tire safety',icon:'📋',q:'Where should you find the manufacturer’s recommended tire pressure?',a:['Printed on the tire as its maximum only','In the owner’s manual or driver-side door jamb','On the license plate','On the inspection sticker'],correct:1,why:'Use the vehicle maker’s recommendation in the manual or door jamb, not merely the tire-sidewall maximum.'},
 {type:'general',topic:'Other information · Insurance',icon:'🛡️',q:'To register and operate a vehicle in Virginia, its owner must:',a:['Maintain the required liability insurance','Buy collision coverage from DMV','Carry only homeowner’s insurance','Insure only drivers under 21'],correct:0,why:'Virginia vehicle owners must maintain the liability insurance required by law and certify coverage when registering.'},
 {type:'general',topic:'Other information · Voting',icon:'🗳️',q:'Can you apply to register to vote through a Virginia DMV office?',a:['No','Yes, using the voter-registration part of the application','Only after age 25','Only when buying a vehicle'],correct:1,why:'DMV applications allow eligible customers to apply to register or update a voter-registration mailing address.'},
 {type:'general',topic:'Other information · Organ donation',icon:'💚',q:'For a registered donor under age 18, who makes the final donation decision?',a:['The DMV examiner','The vehicle owner','A parent or guardian','The insurance company'],correct:2,why:'Minors may indicate their wishes, but Virginia law leaves the final decision to parents or guardians.'}
);

const $ = s => document.querySelector(s);

function storageGet(key) {
  try { return localStorage.getItem(key); }
  catch { return null; }
}

function storageSet(key, value) {
  try { localStorage.setItem(key, value); }
  catch { /* The quiz still works when storage is blocked or full. */ }
}

// Fisher–Yates gives every possible order an equal chance. Using Array.sort()
// with a random comparator looks clever, but it produces a biased shuffle.
function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const range = i + 1;
    const limit = Math.floor(0x100000000 / range) * range;
    const randomValues = new Uint32Array(1);
    do crypto.getRandomValues(randomValues);
    while (randomValues[0] >= limit);
    const j = randomValues[0] % range;
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function shuffleFresh(items, storageKey) {
  let result = shuffle(items);
  let previous = [];
  try {
    const stored = JSON.parse(storageGet(storageKey) || '[]');
    if (Array.isArray(stored)) previous = stored;
  } catch {
    // Ignore stale or malformed browser data instead of breaking the quiz.
  }

  // Try several shuffles and keep looking while over a third of the questions
  // remain in their previous positions. Exact repeats are unlikely, but a
  // noticeably similar order is annoying even when technically random.
  for (let attempt = 0; attempt < 12 && previous.length === result.length; attempt++) {
    const samePositions = result.filter((item, index) => item.q === previous[index]).length;
    if (samePositions <= Math.floor(result.length / 3)) break;
    result = shuffle(items);
  }

  storageSet(storageKey, JSON.stringify(result.map(item => item.q)));
  return result;
}

function shuffleAnswers(question) {
  const choices = question.a.map((text, originalIndex) => ({
    text,
    isCorrect: originalIndex === question.correct
  }));
  const shuffledChoices = shuffle(choices);

  return {
    ...question,
    a: shuffledChoices.map(choice => choice.text),
    correct: shuffledChoices.findIndex(choice => choice.isCorrect)
  };
}
const manualUrl = 'https://www.dmv.virginia.gov/sites/default/files/forms/dmv39.pdf';
const lessonSources = {
  exam: ['Virginia Driver’s Manual — Section 1: Testing', 4],
  signs: ['Virginia Driver’s Manual — Section 2: Signals, Signs and Pavement Markings', 6],
  rightway: ['Virginia Driver’s Manual — Section 3: Right-of-Way and Roundabouts', 16],
  speed: ['Virginia Driver’s Manual — Section 3: Speed, Space and Stopping', 15],
  school: ['Virginia Driver’s Manual — Section 3: School Buses and Railroad Crossings', 16],
  permit: ['Virginia Driver’s Manual — Section 6: License Types', 32],
  signals: ['Virginia Driver’s Manual — Section 2: Signals, Signs and Pavement Markings', 6],
  control: ['Virginia Driver’s Manual — Section 3: Safe Driving', 15],
  sharing: ['Virginia Driver’s Manual — Section 3: Sharing the Road', 20],
  conditions: ['Virginia Driver’s Manual — Section 3: Visibility and Hazardous Conditions', 22],
  behavior: ['Virginia Driver’s Manual — Section 3: Dangerous Driving Behaviors', 23],
  emergencies: ['Virginia Driver’s Manual — Section 3: Crashes, Animals and Traffic Stops', 25],
  restraints: ['Virginia Driver’s Manual — Section 4: Occupant Safety', 27],
  penalties: ['Virginia Driver’s Manual — Section 5: Penalties', 29]
};
const lessonSlugs = {
  exam: 'testing-and-vision',
  signs: 'road-signs',
  rightway: 'right-of-way',
  speed: 'speed-limits',
  school: 'school-buses',
  permit: 'permits-and-licenses',
  signals: 'signals-and-markings',
  control: 'vehicle-control',
  sharing: 'sharing-the-road',
  conditions: 'weather-and-night',
  behavior: 'driver-condition',
  emergencies: 'crashes-and-hazards',
  restraints: 'occupant-safety',
  penalties: 'laws-and-penalties'
};

let quizState = null;

function preferredTheme() {
  const saved = storageGet('vbPermitTheme');
  if (saved === 'dark' || saved === 'light') return saved;
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme, save = false) {
  document.documentElement.dataset.theme = theme;
  const isDark = theme === 'dark';
  $('.theme-icon').textContent = isDark ? '☀' : '☾';
  $('#theme-toggle').setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
  if (save) storageSet('vbPermitTheme', theme);
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next, true);
}

function loadAccessSettings() {
  try {
    const saved=JSON.parse(storageGet('vaPermitAccessibility')||'{}');
    return {
      largeText:Boolean(saved.largeText),
      highContrast:Boolean(saved.highContrast),
      reduceMotion:Boolean(saved.reduceMotion)
    };
  } catch {
    return {largeText:false,highContrast:false,reduceMotion:false};
  }
}

let accessSettings=loadAccessSettings();

function applyAccessSettings() {
  for(const [setting,enabled] of Object.entries(accessSettings)){
    document.documentElement.dataset[setting]=String(enabled);
    const button=document.querySelector(`[data-access-setting="${setting}"]`);
    if(button) button.setAttribute('aria-pressed',String(enabled));
  }
  storageSet('vaPermitAccessibility',JSON.stringify(accessSettings));
}

function setAccessPanel(open) {
  const panel=$('#access-panel');
  panel.hidden=!open;
  $('#access-toggle').setAttribute('aria-expanded',String(open));
  if(open) $('#access-close').focus(); else $('#access-toggle').focus();
}

function route(shouldFocus = false) {
  const legacyRoutes={home:'/',study:'/study/testing-and-vision',practice:'/practice'};
  if(legacyRoutes[location.hash.slice(1)]) history.replaceState(null,'',legacyRoutes[location.hash.slice(1)]);
  const requestedPath=location.pathname.replace(/\/+$/,'')||'/';
  const studyMatch=requestedPath.match(/^\/study\/([^/]+)$/);
  let id='home', lessonId=null;
  if(requestedPath==='/practice') id='practice';
  else if(requestedPath==='/study'){
    history.replaceState(null,'','/study/testing-and-vision');
    id='study';lessonId='exam';
  } else if(studyMatch){
    lessonId=Object.keys(lessonSlugs).find(key=>lessonSlugs[key]===studyMatch[1]);
    if(lessonId) id='study'; else history.replaceState(null,'','/');
  } else if(requestedPath!=='/') history.replaceState(null,'','/');
  document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p.id === id));
  document.querySelectorAll('[data-nav]').forEach(a => a.classList.toggle('active', a.dataset.nav === id));
  if(lessonId) showLesson(lessonId);
  const canonicalUrl=new URL(location.pathname,location.origin).href;
  document.querySelector('link[rel="canonical"]').href=canonicalUrl;
  document.querySelector('meta[property="og:url"]').content=canonicalUrl;
  document.title=lessonId?`${lessons.find(lesson=>lesson.id===lessonId).title} — Virginia Permit Prep`:id==='practice'?`Practice Test — Virginia Permit Prep`:`Virginia Permit Prep — Learner's Permit Study Guide`;
  scrollTo(0,0);
  if(shouldFocus){const heading=document.querySelector(`#${id} h1, #${id} h2`);if(heading){heading.tabIndex=-1;heading.focus();}}
}

function navigate(path){
  if(location.pathname!==path) history.pushState(null,'',path);
  route(true);
}

function showLesson(id) {
  const lesson = lessons.find(x => x.id === id) || lessons[0];
  const [sourceLabel, sourcePage] = lessonSources[lesson.id];
  document.querySelectorAll('.topic-list [data-lesson]').forEach(link => link.classList.toggle('active', link.dataset.lesson === lesson.id));
  $('#lesson-card').innerHTML = `<p class="eyebrow">${lesson.label}</p><h3>${lesson.title}</h3><p class="summary">${lesson.summary}</p><div class="fact-grid">${lesson.facts.map(f=>`<div class="fact"><strong>${f[0]}</strong><span>${f[1]}</span></div>`).join('')}</div><div class="callout"><strong>${lesson.note[0]}</strong><span>${lesson.note[1]}</span></div><a class="lesson-source" href="${manualUrl}#page=${sourcePage}" target="_blank" rel="noopener">Source: ${sourceLabel} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a>`;
}

function initLessons() {
  $('#topic-list').innerHTML = lessons.map(lesson => `<a href="/study/${lessonSlugs[lesson.id]}" data-route data-lesson="${lesson.id}">${lesson.label}</a>`).join('');
}

function isSupplemental(question) {
  const topic = question.topic || '';
  return topic.startsWith('Other information') ||
    topic.startsWith('License types') ||
    topic.includes('Road skills test') ||
    topic.includes('Vision screening') ||
    topic.includes('Vision standards') ||
    topic.includes('Child-support') ||
    topic.includes('Medical review') ||
    topic.includes('Insurance monitoring') ||
    topic.includes('Vehicle impoundment') ||
    topic.includes('Restitution');
}

function signGraphic(question) {
  const text = question.q.toLowerCase();
  const svg = body => `<svg viewBox="0 0 120 100" role="img" aria-label="Road-sign illustration">${body}</svg>`;
  if(text.includes('eight-sided')) return svg('<polygon points="38,5 82,5 105,28 105,72 82,95 38,95 15,72 15,28" fill="#c9232a" stroke="#fff" stroke-width="5"/><text x="60" y="59" text-anchor="middle" fill="#fff" font-size="23" font-weight="800">STOP</text>');
  if(text.includes('triangular')) return svg('<polygon points="10,12 110,12 60,92" fill="#fff" stroke="#d0202d" stroke-width="7"/><text x="60" y="49" text-anchor="middle" fill="#202326" font-size="17" font-weight="800">YIELD</text>');
  if(text.includes('diamond-shaped')) return svg('<rect x="24" y="14" width="72" height="72" rx="4" transform="rotate(45 60 50)" fill="#f5c928" stroke="#202326" stroke-width="4"/><path d="M42 66 C52 57 48 42 66 33" fill="none" stroke="#202326" stroke-width="7"/>');
  if(text.includes('five-sided')) return svg('<polygon points="60,6 108,39 91,94 29,94 12,39" fill="#e8f04b" stroke="#202326" stroke-width="4"/><path d="M42 73l12-30m0 0l19 28m-25-12h19" fill="none" stroke="#202326" stroke-width="6"/>');
  if(text.includes('orange-and-black')) return svg('<rect x="25" y="15" width="70" height="70" transform="rotate(45 60 50)" fill="#f28c28" stroke="#202326" stroke-width="4"/><path d="M43 73l15-44m1 17l17 27" stroke="#202326" stroke-width="6"/>');
  if(text.includes('pink-and-black')) return svg('<rect x="25" y="15" width="70" height="70" transform="rotate(45 60 50)" fill="#ff78a8" stroke="#202326" stroke-width="4"/><text x="60" y="55" text-anchor="middle" fill="#202326" font-size="14" font-weight="800">INCIDENT</text>');
  if(text.includes('red circle')) return svg('<circle cx="60" cy="50" r="39" fill="#fff" stroke="#d0202d" stroke-width="8"/><path d="M32 78L88 22" stroke="#d0202d" stroke-width="9"/><path d="M48 68V32l28 18z" fill="#202326"/>');
  if(text.includes('red x')) return svg('<rect x="14" y="8" width="92" height="84" rx="8" fill="#15191c"/><path d="M38 27l44 46M82 27L38 73" stroke="#ef3340" stroke-width="12"/>');
  if(text.includes('green road')) return svg('<rect x="8" y="18" width="104" height="64" rx="5" fill="#16764a" stroke="#fff" stroke-width="3"/><text x="60" y="45" text-anchor="middle" fill="#fff" font-size="12" font-weight="700">VIRGINIA BEACH</text><path d="M30 64h55m0 0l-12-9m12 9l-12 9" stroke="#fff" stroke-width="5"/>');
  if(text.includes('yellow diagonal')) return svg('<rect x="14" y="8" width="92" height="84" rx="8" fill="#15191c"/><path d="M35 26l50 48m0 0V52m0 22H63" stroke="#f5c928" stroke-width="9"/>');
  if(text.includes('blue-and-white')) return svg('<rect x="21" y="9" width="78" height="82" rx="5" fill="#1769aa" stroke="#fff" stroke-width="4"/><text x="60" y="61" text-anchor="middle" fill="#fff" font-size="39" font-weight="800">H</text>');
  if(text.includes('brown-and-white')) return svg('<rect x="13" y="14" width="94" height="72" rx="5" fill="#77502d" stroke="#fff" stroke-width="4"/><path d="M29 67l21-34 13 20 10-14 19 28z" fill="#fff"/>');
  if(text.includes('vertical rectangular')) return svg('<rect x="31" y="6" width="58" height="88" rx="4" fill="#fff" stroke="#202326" stroke-width="4"/><text x="60" y="36" text-anchor="middle" fill="#202326" font-size="12" font-weight="800">SPEED</text><text x="60" y="52" text-anchor="middle" fill="#202326" font-size="12" font-weight="800">LIMIT</text><text x="60" y="79" text-anchor="middle" fill="#202326" font-size="28" font-weight="800">35</text>');
  if(text.includes('do not enter')) return svg('<circle cx="60" cy="50" r="43" fill="#c9232a" stroke="#fff" stroke-width="4"/><rect x="24" y="42" width="72" height="16" rx="2" fill="#fff"/>');
  if(text.includes('winding-road')) return svg('<rect x="25" y="15" width="70" height="70" transform="rotate(45 60 50)" fill="#f5c928" stroke="#202326" stroke-width="4"/><path d="M55 76c28-19-17-26 8-48" fill="none" stroke="#202326" stroke-width="7"/>');
  if(text.includes('crossbuck')) return svg('<g transform="translate(60 50) rotate(38)"><rect x="-57" y="-11" width="114" height="22" fill="#fff" stroke="#202326" stroke-width="3"/></g><g transform="translate(60 50) rotate(-38)"><rect x="-57" y="-11" width="114" height="22" fill="#fff" stroke="#202326" stroke-width="3"/></g><text x="60" y="25" text-anchor="middle" fill="#202326" font-size="10" font-weight="800">RAILROAD</text><text x="60" y="81" text-anchor="middle" fill="#202326" font-size="10" font-weight="800">CROSSING</text>');
  return svg('<rect x="25" y="15" width="70" height="70" transform="rotate(45 60 50)" fill="#f5c928" stroke="#202326" stroke-width="4"/><text x="60" y="57" text-anchor="middle" fill="#202326" font-size="28" font-weight="800">!</text>');
}

function signPng(question) {
  const text=question.q.toLowerCase();
  const assets=[
    ['eight-sided','stop'],['triangular','yield'],['diamond-shaped','warning'],['five-sided','school'],
    ['orange-and-black','work-zone'],['pink-and-black','incident'],['red circle','prohibited'],
    ['green road','guide'],['blue-and-white','services'],['brown-and-white','recreation'],
    ['vertical rectangular','speed-limit'],['do not enter','do-not-enter'],
    ['winding-road','winding-road'],['crossbuck','railroad-crossbuck']
  ];
  const match=assets.find(([phrase])=>text.includes(phrase));
  return `<img src="/assets/signs/${match?match[1]:'warning'}.png" alt="" width="120" height="100">`;
}

function startQuiz(mode) {
  let selected;
  if (mode === 'exam') {
    const signs = shuffleFresh(questions.filter(q=>q.type==='sign'), 'vbPermitLastSigns').slice(0,10);
    const generalPool = questions.filter(q=>q.type==='general' && !isSupplemental(q));
    const general = shuffleFresh(generalPool, 'vbPermitLastGeneral').slice(0,30);
    selected = [...signs, ...general];
  } else {
    selected = shuffleFresh(questions, 'vbPermitLastQuick').slice(0,10);
  }
  selected = selected.map(shuffleAnswers);
  quizState = { mode, questions:selected, index:0, correct:0, signCorrect:0, generalCorrect:0, answered:false, responses:[], terminated:false };
  $('#quiz-intro').classList.add('hidden'); $('#results').classList.add('hidden'); $('#quiz').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const s=quizState, q=s.questions[s.index]; s.answered=false;
  $('#quiz-section').textContent = s.mode==='exam' ? (q.type==='sign' ? 'Part 1 · Road signs' : 'Part 2 · General knowledge') : 'Quick practice';
  $('#quiz-count').textContent=`Question ${s.index+1} of ${s.questions.length}`;
  $('#progress-bar').style.width=`${(s.index/s.questions.length)*100}%`;
  const icon=$('#question-icon');
  if(q.type==='sign') icon.innerHTML=signPng(q); else icon.textContent=q.icon;
  $('#question-text').textContent=q.q;
  $('#answers').innerHTML=q.a.map((answer,i)=>`<button class="answer" data-answer="${i}"><b>${String.fromCharCode(65+i)}.</b> ${answer}</button>`).join('');
  $('#explanation').classList.add('hidden'); $('#next-button').classList.add('hidden'); $('#report-status').textContent='';
  const heading=$('#question-text'); heading.tabIndex=-1; heading.focus();
}

function answerQuestion(index) {
  const s=quizState, q=s.questions[s.index]; if(s.answered)return; s.answered=true;
  const good=index===q.correct;
  s.responses[s.index] = { selected:index, correct:good };
  if(good){s.correct++; q.type==='sign'?s.signCorrect++:s.generalCorrect++;}
  document.querySelectorAll('.answer').forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add('correct');if(i===index&&!good)b.classList.add('wrong');});
  $('#explanation').innerHTML=`<strong>${good?'Correct.':'Not quite.'}</strong> ${q.why}<br><button class="question-report" type="button" data-report-question>Report or copy this question</button>`; $('#explanation').classList.remove('hidden');
  const failedSignSection = s.mode==='exam' && q.type==='sign' && !good;
  $('#next-button').textContent=failedSignSection?'End attempt →':s.index===s.questions.length-1?'See results →':'Next question →'; $('#next-button').classList.remove('hidden');
}

function nextQuestion(){
  const s=quizState, q=s.questions[s.index], response=s.responses[s.index];
  if(s.mode==='exam' && q.type==='sign' && response && !response.correct){s.terminated=true;showResults();return;}
  if(++s.index < s.questions.length) renderQuestion(); else showResults();
}
function showResults(){
  const s=quizState, attempted=s.responses.filter(Boolean).length, pct=Math.round(s.correct/attempted*100); let passed=s.mode==='quick'?pct>=80:s.signCorrect===10&&s.generalCorrect>=24;
  if(!s.terminated){const bestKey=s.mode==='exam'?'vaPermitBestExam':'vaPermitBestQuick';const best=Math.max(Number(storageGet(bestKey)||0),pct);storageSet(bestKey,best);}
  $('#quiz').classList.add('hidden'); $('#results').classList.remove('hidden');
  const breakdown=s.mode==='exam'?(s.terminated?`Signs: ${s.signCorrect}/${attempted} · General knowledge not attempted`:`Signs: ${s.signCorrect}/10 · General: ${s.generalCorrect}/30`):`${s.correct} of ${s.questions.length} correct`;
  const missed = s.questions.map((question,index)=>({question,response:s.responses[index]})).filter(item=>item.response && !item.response.correct);
  const review = missed.map(({question,response},index)=>`
    <article class="missed-card">
      <div class="missed-number">${index+1}</div>
      <div>
        <span class="missed-topic">${question.topic || (question.type==='sign'?'Road signs':'General knowledge')}</span>
        <h3>${question.q}</h3>
        <p class="your-answer"><strong>Your answer:</strong> ${question.a[response.selected]}</p>
        <p class="correct-answer"><strong>Correct answer:</strong> ${question.a[question.correct]}</p>
        <p class="answer-reason">${question.why}</p>
      </div>
    </article>`).join('');
  const reviewButton = missed.length ? `<button class="button ghost" data-review aria-expanded="false">Review ${missed.length} missed ${missed.length===1?'question':'questions'}</button>` : '';
  const heading=s.terminated?'Sign section not passed.':passed?'You passed this round.':'Not yet—but now you know what bites.';
  const guidance=s.terminated?'The real Virginia exam ends Part 1 after a missed sign, so this simulation does too. Review it, then start a fresh attempt.':missed.length===0?'Perfect score. The goblins have been denied entry.':passed?'Nice. Review the misses so this is memory, not luck.':'Review the misses and try again. Wrong answers are useful when they happen here instead of at the DMV.';
  $('#results').innerHTML=`<div class="results-summary"><p class="eyebrow">${passed?'Passing result':'Keep studying'}</p><h2>${heading}</h2><div class="score-ring" style="--score:${pct*3.6}deg"><span>${pct}%</span></div><p>${breakdown}</p><p>${guidance}</p><div class="result-actions">${reviewButton}<button class="button primary" data-retry="${s.mode}">Try again</button><button class="button ghost" data-choose-mode aria-label="Back to test selection">Back</button><a class="button ghost" href="/study/testing-and-vision" data-route>Review guide</a></div></div>${missed.length?`<section class="missed-review hidden" id="missed-review" aria-label="Missed questions"><div class="review-heading"><p class="eyebrow">Answer review</p><h2>What tripped you up</h2></div>${review}</section>`:''}`;
  showBest();
  const resultsHeading=$('#results h2');resultsHeading.tabIndex=-1;resultsHeading.focus();
}
function resetQuiz(shouldFocus=false){ quizState=null;$('#quiz').classList.add('hidden');$('#results').classList.add('hidden');$('#results').textContent='';$('#quiz-intro').classList.remove('hidden');showBest();if(shouldFocus){const heading=$('#quiz-intro h2');heading.tabIndex=-1;heading.focus();} }
function showBest(){ const quick=storageGet('vaPermitBestQuick'), exam=storageGet('vaPermitBestExam');const scores=[];if(quick)scores.push(`Quick best: ${quick}%`);if(exam)scores.push(`Full simulation best: ${exam}%`);$('#best-score').textContent=scores.join(' · '); }

async function reportQuestion() {
  const s=quizState, q=s.questions[s.index], response=s.responses[s.index];
  const report=`Virginia Permit Prep question report\nTopic: ${q.topic||q.type}\nQuestion: ${q.q}\nDisplayed answers: ${q.a.join(' | ')}\nSelected: ${q.a[response.selected]}\nMarked correct: ${q.a[q.correct]}\nExplanation: ${q.why}`;
  const email=document.body.dataset.feedbackEmail.trim();
  const status=$('#report-status');
  try {
    await navigator.clipboard.writeText(report);
    status.textContent='Question details copied. ';
  } catch {
    window.prompt('Copy these question details:',report);
    status.textContent='Use the copy dialog, then ';
  }
  if(email){
    const emailLink=document.createElement('a');
    emailLink.href=`mailto:${email}?subject=${encodeURIComponent('Virginia Permit Prep question report')}&body=${encodeURIComponent(report)}`;
    emailLink.textContent='open an email draft.';
    status.append(emailLink);
  } else {
    status.append('send them to the site owner.');
  }
}

addEventListener('popstate',()=>{route(true);if(location.pathname==='/practice'&&!quizState)resetQuiz();});
document.addEventListener('click',e=>{const routeLink=e.target.closest('[data-route]');if(routeLink&&!e.defaultPrevented&&e.button===0&&!e.metaKey&&!e.ctrlKey&&!e.shiftKey&&!e.altKey){e.preventDefault();navigate(new URL(routeLink.href,location.origin).pathname);}const skip=e.target.closest('.skip-link');if(skip){e.preventDefault();$('#main-content').focus();}const mode=e.target.closest('[data-mode]');if(mode)startQuiz(mode.dataset.mode);const answer=e.target.closest('[data-answer]');if(answer)answerQuestion(Number(answer.dataset.answer));const report=e.target.closest('[data-report-question]');if(report)reportQuestion();const retry=e.target.closest('[data-retry]');if(retry)startQuiz(retry.dataset.retry);const chooseMode=e.target.closest('[data-choose-mode]');if(chooseMode)resetQuiz(true);const review=e.target.closest('[data-review]');if(review){const panel=$('#missed-review');const opening=panel.classList.contains('hidden');panel.classList.toggle('hidden');review.setAttribute('aria-expanded',String(opening));review.textContent=opening?'Hide missed questions':`Review ${panel.querySelectorAll('.missed-card').length} missed questions`;if(opening)panel.scrollIntoView({behavior:'smooth',block:'start'});}});
$('#next-button').addEventListener('click',nextQuestion);
$('#theme-toggle').addEventListener('click',toggleTheme);
$('#access-toggle').addEventListener('click',()=>setAccessPanel($('#access-panel').hidden));
$('#access-close').addEventListener('click',()=>setAccessPanel(false));
document.querySelectorAll('[data-access-setting]').forEach(button=>button.addEventListener('click',()=>{const setting=button.dataset.accessSetting;accessSettings[setting]=!accessSettings[setting];applyAccessSettings();}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#access-panel').hidden)setAccessPanel(false);});
setTheme(preferredTheme()); applyAccessSettings(); initLessons(); showBest(); route();
