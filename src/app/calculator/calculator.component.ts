import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  currentInput = "0";
  operator = null;
  firstOperand  = null ;
  isSecondNumber = false;
  

  constructor() 
  {

  }

  ngOnInit(): void { 
  }

  getInput(input:string)
  {
    console.log(input);
    if(this.isSecondNumber)
    {
      this.currentInput=input;
      this.isSecondNumber=false;
    }
    else
    {
      this.currentInput==="0" ? this.currentInput=input:this.currentInput+=input;
    }
  }

  getOperator(op:string){
        console.log(op);
        if(this.firstOperand===null){
          this.firstOperand=this.currentInput;
        }
        else if(this.operator){
          let presentInput=Number(this.currentInput);
          let output= this.compute(this.operator,presentInput);
          this.currentInput=String(output);
          this.firstOperand=output;
        }  
        this.operator = op;
        this.isSecondNumber = true;
    
        console.log(this.firstOperand);

    }

    compute(operator : string ,presentInput : number){
      let firstValue=Number(this.firstOperand);
     switch(operator){
         case '+' : return firstValue += presentInput;
         case '-' : return firstValue -= presentInput;
         case '*' : return firstValue *= presentInput;
         case '/' : return firstValue /= presentInput;
         case '=' : return firstValue;
     }
    }
    

    clear()
    {
      this.currentInput = "0";
      this.operator = null;
      this.firstOperand  = null ;
      this.isSecondNumber= false;
    }
  }

