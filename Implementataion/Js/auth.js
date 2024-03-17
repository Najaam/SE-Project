const toggle = (id) => {
    var x = document.querySelector('.log-form');
    var y = document.querySelector('.reg-form');
    var a = document.querySelector('.logintext');
    var b = document.querySelector('.registertext');
    if (id === 'log-form') {
        x.style.display = 'flex';
        y.style.display = 'none';
        a.style.backgroundColor = '#40a2e3';
        a.style.borderRadius = '10px';
        a.style.padding='10px 20px 10px 20px';
        a.style.margin='5px';
        a.style.color='#fff'
        b.style.color='#000'
        b.style.backgroundColor = '#bbe2ec';
    } else if (id === 'reg-form') {
        x.style.display = 'none';
        y.style.display = 'flex';
        b.style.backgroundColor = '#40a2e3';
        b.style.borderRadius = '10px';
        b.style.padding='10px 20px 10px 20px';
        b.style.margin='5px';
        b.style.color='#fff'
        a.style.color='#000'
        a.style.backgroundColor = '#bbe2ec';
    }
}