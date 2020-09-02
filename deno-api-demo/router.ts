import { Router } from "https://deno.land/x/oak@v6.1.0/router.ts";
import { addAttendee, getAttendees } from "./controllers/attendees.ts";

const router = new Router();
 
router.get('/api/v1/attendees', getAttendees);
router.post('/api/v1/attendee', addAttendee);

export default router;