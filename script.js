
    function calculate() {
      var consumers1 = document.getElementsByName('consumers-1');
      var consumers2 = document.getElementsByName('consumers-2');
      var total = 0;
      var perPersonTotal = {};
      
      for (var i = 0; i < consumers1.length; i++) {
        if (consumers1[i].checked) {
          var consumer = consumers1[i].value;
          perPersonTotal[consumer] = 0;
        }
      }
      
      for (var i = 0; i < consumers2.length; i++) {
        if (consumers2[i].checked) {
          var consumer = consumers2[i].value;
          perPersonTotal[consumer] = 0;
        }
      }
      
      var rows1 = document.getElementById('products-table-1').rows;
      for (var i = 1; i < rows1.length; i++) {
        var price = parseFloat(rows1[i].cells[1].innerText.replace('R$', ''));
        var selectedConsumers = rows1[i].querySelectorAll('input[type="checkbox"]:checked');
        var numConsumers = selectedConsumers.length;
        
        if (numConsumers > 0) {
          var perPersonPrice = price / numConsumers;
          total += price;
          
          for (var j = 0; j < selectedConsumers.length; j++) {
            var consumer = selectedConsumers[j].value;
            if (consumer === 'Maria') {
              perPersonTotal[consumer] += perPersonPrice + (perPersonPrice * 0.1);
            } else {
              perPersonTotal[consumer] += perPersonPrice;
            }
          }
        }
      }
      
      var rows2 = document.getElementById('products-table-2').rows;
      for (var i = 1; i < rows2.length; i++) {
        var price = parseFloat(rows2[i].cells[1].innerText.replace('R$', ''));
        var selectedConsumers = rows2[i].querySelectorAll('input[type="checkbox"]:checked');
        var numConsumers = selectedConsumers.length;
        
        if (numConsumers > 0) {
          var perPersonPrice = price / numConsumers;
          total += price;
          
          for (var j = 0; j < selectedConsumers.length; j++) {
            var consumer = selectedConsumers[j].value;
            perPersonTotal[consumer] += perPersonPrice + (perPersonPrice * 0.1);
          }
        }
      }
      
      var result = '';
      for (var consumer in perPersonTotal) {
        result += consumer + ': R$ ' + perPersonTotal[consumer].toFixed(2) + '<br>';
      }
      
      document.getElementById('result').innerHTML = result;
    }
