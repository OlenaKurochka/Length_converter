function lengthConverter(source,valNum) {
    valNum = parseFloat(valNum);
      
      let inputMeters = document.getElementById("inputMeters");
      let inputcm = document.getElementById("inputcm");
      let inputInches = document.getElementById("inputInches");
      let inputFeet = document.getElementById("inputFeet");
      let inputKilometers = document.getElementById("inputKilometers");
      let inputmm = document.getElementById("inputmm")
      let inputyd = document.getElementById("inputyd")

     
      if (source=="inputyd") {
          inputFeet.value=(valNum*3).toFixed();
          inputInches.value=(valNum*36).toFixed(2);
          inputcm.value=(valNum*91.44).toFixed(2);
          inputKilometers.value=(valNum*0.0009144).toFixed(5);
          inputmm.value=(valNum*914.4).toFixed(2);
          inputMeters.value=(valNum*0.9144).toFixed(3);    
      }

      if (source=="inputMeters") {
          inputFeet.value=(valNum*3.2808).toFixed(2);
          inputInches.value=(valNum*39.370).toFixed(2);
          inputcm.value=(valNum/0.01).toFixed(3);
          inputKilometers.value=(valNum/1000).toFixed(5);
          inputmm.value=(valNum*1000).toFixed(2);
          inputyd.value=(valNum/0.9144).toFixed(3)    
      }

      if (source=="inputcm") {
          inputFeet.value=(valNum*0.032808).toFixed(3);
          inputMeters.value=(valNum/100).toFixed(3);
          inputInches.value=(valNum*0.39370).toFixed(2);  
          inputKilometers.value=(valNum/100000).toFixed(6);
          inputmm.value=(valNum*10).toFixed(2);
          inputyd.value=(valNum/91.44).toFixed(3)  
      }

      if (source=="inputInches") {
          inputFeet.value=(valNum*0.083333).toFixed(3);
          inputMeters.value=(valNum/39.370).toFixed(3);
          inputcm.value=(valNum/0.39370).toFixed(2); 
          inputKilometers.value=(valNum/39370).toFixed(6);
          inputmm.value=(valNum*25.4).toFixed(2); 
          inputyd.value=(valNum*0.0278).toFixed(3) 
      }

      if (source=="inputFeet") {
          inputMeters.value=(valNum/3.2808).toFixed(2);
          inputInches.value=(valNum*12).toFixed(2);
          inputcm.value=(valNum/0.032808).toFixed();
          inputKilometers.value=(valNum/3280.8).toFixed(5);
          inputmm.value=(valNum*304.8).toFixed(2);
          inputyd.value=(valNum*0.33).toFixed(2)    
      }
      
      if (source=="inputKilometers") {
          inputFeet.value=(valNum*3280.8).toFixed(2);
          inputMeters.value=(valNum*1000).toFixed(2);
          inputInches.value=(valNum*39370).toFixed(2);
          inputcm.value=(valNum*100000).toFixed(2);
          inputmm.value=(valNum*1000000).toFixed();
          inputyd.value=(valNum*1093.61).toFixed(2)   
      }
      if (source=="inputmm") {
          inputMeters.value=(valNum/1000).toFixed(3);
          inputFeet.value=(valNum*0.00328).toFixed(4);
          inputInches.value=(valNum*0.03937).toFixed(4);
          inputcm.value=(valNum/0.1).toFixed(2);
          inputKilometers.value=(valNum/1000000).toFixed(7); 
          inputyd.value=(valNum*0.001093).toFixed(6) 
      }

  }
