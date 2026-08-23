---
*** Begin Patch
*** Update File: apps/web/modules/bookings/components/BookEventForm/BookEventForm.tsx
@@
   const paymentCurrency = useMemo(() => {
     if (!eventType) return "USD";
     return getPaymentAppData(eventType)?.currency || "USD";
   }, [eventType]);
+
+  const isSlotOutsideBusinessHours = useMemo(() => {
+    if (!timeslot) return false;
+    return isOutsideBusinessHours(timeslot, timezone);
+  }, [timeslot, timezone]);
*** End Patch
