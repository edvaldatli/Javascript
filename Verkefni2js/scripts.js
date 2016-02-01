/**
 * Created by 0105982499 on 27.1.2016.
 */
var pizzasmidur = function(obj, Nafn, Alegg, Verd, Stærð, divNafn){
    var obj = {
        nafn: Nafn,
        alegg: Alegg,
        verd: Verd,
        stærð: Stærð
    }
    nafn = obj.nafn;
    alegg = obj.alegg;
    verd = obj.verd;
    stærð = obj.stærð;

    var iDiv = document.createElement('div');
    iDiv.id = divNafn;

// Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    var pizzatexti = document.createElement('span')
    document.getElementsByTagName('body')[0].appendChild(pizzatexti);
    pizzatexti.innerHTML = nafn;

    pizzatexti = document.createElement('span')
    document.getElementsByTagName('body')[0].appendChild(pizzatexti);
    pizzatexti.innerHTML = alegg;

    pizzatexti = document.createElement('span')
    document.getElementsByTagName('body')[0].appendChild(pizzatexti);
    pizzatexti.innerHTML = verd + " kr";

    pizzatexti = document.createElement('span');
    document.getElementsByTagName('body')[0].appendChild(pizzatexti);
    pizzatexti.innerHTML = stærð;
}



pizzasmidur('pizza1', 'Pepperoni Veisla', 'Pepperoni', 2090, 'Stór', 'pepperoni');
pizzasmidur('pizza1', 'Pepperoni Veisla', 'Pepperoni', 2090, 'Stór', 'pepperoni');








