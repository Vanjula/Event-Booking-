<script type="text/javascript">
    var clockElement = document.getElementById('clock');

    function clock() {
        clockElement.textContent = new Date().toString();
    }

    setInterval(clock, 1000);
</script>