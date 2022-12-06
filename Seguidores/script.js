const counters = document.querySelectorAll(".counter")

counters.forEach(counter =>{
    counter.innerText="0";
    const target = +counter.getAttribute("data-target");
    const interval = target/100;

    const updateCounter =()=>{
        const value = +counter.innerText;
        if (value < target) {
            counter.innerText=Math.ceil(value+interval);
            setTimeout(()=>{
                updateCounter();
            },30);
        }
    }
    updateCounter();

});