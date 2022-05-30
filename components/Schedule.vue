<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import ptLocale from "@fullcalendar/core/locales/pt";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right:
            "dayGridMonth,dayGridWeek,dayGridDay,timeGridWeek,timeGridDay,listMonth,listWeek,listDay",
        },
        initialView: "dayGridMonth",
        locale: ptLocale,
        editable: true,
        selectable: true,
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        nowIndicator: true,
        events: [
          {
            id: "a",
            title: "my event",
            start: "2022-05-30",
          },
        ],
      },
    };
  },

  methods: {
    handleDateSelect(selectInfo) {
      console.log(selectInfo)
    },

    handleEventClick(clickInfo) {
      console.log(clickInfo)
    },
  },
};
</script>

<style>
</style>