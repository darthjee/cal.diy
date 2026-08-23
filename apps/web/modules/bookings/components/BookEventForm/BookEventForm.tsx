---
*** Begin Patch
*** Update File: apps/web/modules/bookings/components/BookEventForm/BookEventForm.tsx
@@
-import { formatEventFromTime } from "@calcom/features/bookings/Booker/utils/dates";
+import { formatEventFromTime } from "@calcom/features/bookings/Booker/utils/dates";
+import { isOutsideBusinessHours } from "@calcom/features/bookings/Booker/utils/isOutsideBusinessHours";
*** End Patch
