<template>
    <div id="calendar"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
onMounted(() => {
    const calendarEl = document.getElementById('calendar');

    const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        events: [{
        "title": "All Day Event",
        "start": "2023-12-01"
    },
    {
        "title": "Long Event",
        "start": "2023-12-07",
        "end": "2023-12-10"
    },
    {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2023-12-09T16:00:00+00:00"
    },
    {
        "groupId": "999",
        "title": "Repeating Event",
        "start": "2023-12-16T16:00:00+00:00"
    },
    {
        "title": "Conference",
        "start": "2023-12-04",
        "end": "2023-12-06"
    },
    {
        "title": "Meeting",
        "start": "2023-12-05T10:30:00+00:00",
        "end": "2023-12-05T12:30:00+00:00"
    },
    {
        "title": "Lunch",
        "start": "2023-12-05T12:00:00+00:00"
    },
    {
        "title": "Birthday Party",
        "start": "2023-12-06T07:00:00+00:00"
    },
    {
        "url": "http:\/\/google.com\/",
        "title": "Click for Google",
        "start": "2023-12-28"
    }]
    });

    calendar.render()
})
</script>

<style>
#calendar{
    width: 900px;
    height: 900px;
}
</style>