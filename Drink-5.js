/* Don't Drink the Water

https://www.codewars.com/kata/562e6df5cf2d3908ad00019e/train/javascript/645232e51661b0088a518867

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.
*/


function separateLiquids(glass) {
    const densities = {
          'H': 1.36,'W': 1.00,'A': 0.87,'O': 0.80
        };
        let flattened = [];
        for (let i = 0; i < glass.length; i++) {
          flattened = flattened.concat(glass[i]);
        }
        flattened.sort((a, b) => densities[a] - densities[b]);
      
    let result = [];
        let index = 0;
        for (let i = 0; i < glass.length; i++) {
          let row = [];
          for (let j = 0; j < glass[i].length; j++) {
            row.push(flattened[index]);
            index++;
          }
          result.push(row);
        }
      
        return result;
      }