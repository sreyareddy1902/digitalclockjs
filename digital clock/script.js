
function fun()
{
    let timeZone=new Date()
    let day=timeZone.getDay()
    switch(day)
    {
        case 0: day='SUNDAY'
        break
        case 1: day='MONDAY'
        break
        case 2: day='TUESDAY'
        break
        case 3: day='WEDNESDAY'
        break
        case 4: day='THURSDAY'
        break
        case 5: day='FRIDAY'
        break
        case 6: day='SATURDAY'
        break
    }
    document.getElementById('b1').innerHTML=day
    let date=timeZone.getDate()
    let month=timeZone.getMonth()
    let year=timeZone.getFullYear()
    switch(month)
    {
        case 0:month='JAN'
        break
        case 1:month='FEB'
        break
        case 2:month='MAR'
        break
        case 3:month='APR'
        break
        case 4:month='MAY'
        break
        case 5:month='JUNE'
        break
        case 6:month='JULY'
        break
        case 7:month='AUG'
        break
        case 8:month='SEP'
        break
        case 9:month='OCT'
        break
        case 10:month='NOV'
        break
        case 11:month='DEC'
        break

    }
    let z=date+"-"+month+"-"+year
    document.getElementById('b2').innerHTML=z

    let hours=timeZone.getHours()
    let mins=timeZone.getMinutes()
    let secs=timeZone.getSeconds()
    let ampm=""
    if(hours>=12)
    {
        ampm="PM"
    }
    else
    {
        ampm="AM"
    }
    let time=hours+":"+mins+":"+secs+" "+ampm
    document.getElementById('b3').innerHTML=time
    setTimeout(function(){fun(),1000})

    if(day=='SUNDAY')
    {
        document.getElementById('a').style.backgroundColor='yellow'
    }
    else if(day=='MONDAY')
    {
        document.getElementById('a').style.backgroundColor='pink'
    }
    else if(day=='TUESDAY')
    {
        document.getElementById('a').style.backgroundColor='orange'
    }
    else if(day=='WEDNESDAY')
    {
        document.getElementById('a').style.backgroundColor='lemonyellow'
    }
    else if(day=='THURSDAY')
    {
        document.getElementById('a').style.backgroundColor='violet'
    }
    else if(day=='FRIDAY')
    {
        document.getElementById('a').style.backgroundColor='tomato'
    }
    else if(day=='SATURDAY')
    {
        document.getElementById('a').style.backgroundColor='gray'
    }
    else
    {
        document.getElementById('a').style.backgroundColor=""
    }
}