
import React from "react";
import { HorizontalCell, HorizontalScroll } from "@vkontakte/vkui";

export default function Dates(props) {
  let dates = generateDate()

  return (
    <HorizontalScroll>
        <div style={{ display: "flex" }}>
        {dates.map(element=>(
              <HorizontalCell className="cell" size="l" onClick={() => props.changeDate(`${element}`)}>
                <p>{element + ' число'}</p>
              </HorizontalCell>
            
          ))}
    </div>
    </HorizontalScroll>
  )
}
function generateDate(){
  let dates = []
  let curMonth = new Date().getMonth()

  let predicate = (curMonth == 1 || curMonth == 3 || curMonth == 5 || curMonth == 6 || curMonth == 6 || curMonth == 10 || curMonth == 12)  
  for(let i = 1; i < 31; i++){
    if ((!predicate && i==30) && (curMonth != 4)){
      break
    }
    if (curMonth == 4 && i == 28){
      break
    }
    if (predicate && i == 31){
      break
    }
    dates.push(i)
  }
  return dates   
}

function dataItems() { 
  function* dates() {
    let mn = new Date().getMonth;
    let days;
    if (mn == 1 || mn == 3 || mn == 5 || mn == 6 || mn == 6 || mn == 10 || mn == 12)
      days = 31;
    else if (mn == 2)
      days = 28;
    else 
      days = 30;

    function date(dayNum) {
      this.dayNum = dayNum;
      //this.weekDay = weekDay;
    }
    let day = 1;
    while (day <= days) {
      yield new date(day);
      return new (day++);
    }
  }

  return dates
  }
