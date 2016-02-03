/**
 * Created by 0105982499 on 27.1.2016.
 */
var pizzasmidur = function(obj, Nafn, Alegg, Verd, Stærð, divNafn){
    var obj = {
        nafn: Nafn,
        alegg: Alegg,
        verd: Verd,
        stærð: Stærð
    };
    nafn = obj.nafn;
    alegg = obj.alegg;
    verd = obj.verd;
    stærð = obj.stærð;

    var iDiv = document.createElement('div');
    iDiv.id = divNafn;

// Then append the whole thing onto the body
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    var pizzatexti = document.createElement('span');
    pizzatexti.innerHTML = nafn + " - ";
    iDiv.innerHTML = pizzatexti.innerHTML;

    pizzatexti = document.createElement('span');
    pizzatexti.innerHTML = alegg + " - ";
    iDiv.innerHTML = iDiv.innerHTML + pizzatexti.innerHTML;

    pizzatexti = document.createElement('span');
    pizzatexti.innerHTML = verd + " kr - ";
    iDiv.innerHTML = iDiv.innerHTML + pizzatexti.innerHTML;


    pizzatexti = document.createElement('span');
    pizzatexti.innerHTML = stærð;
    iDiv.innerHTML = iDiv.innerHTML + pizzatexti.innerHTML;
};



pizzasmidur('pizza1', 'Pepperoni Veisla', 'pepperoni', 2789, 'Stór', 'pepperoni');
pizzasmidur('pizza1', "Eðvald's Classic", 'pepperoni, græn paprika, laukur, sveppir', 2979, 'Stór', 'classic');
pizzasmidur('pizza1', "Smoky Bearnaise", 'hakk, cheddarostur, oregano, laukur, rauðlaukur, sveppir, chili-bearnaise', 3109, 'Stór', 'Smoky');
pizzasmidur('pizza1', "BBQ King", 'pepperoni, piparostur, rjómaostur, jalapeno, BBQ sósa, Pulled Pork', 2169, 'Stór', 'BBQ');
pizzasmidur('pizza1', "New York", 'hakk, beikonkurl, cheddarostur', 2849, 'Stór', 'NY');
pizzasmidur('pizza1', "Bahamas", 'skinka, beikonkurl, ananas, auka ostur', 3129, 'Stór', 'Bahamas');
pizzasmidur('pizza1', "Creme Mexicano", 'rjómaostur, græn paprika, rauðlaukur, fajitas kjúklingur, sveppir', 2159, 'Stór', 'CremeMex');
pizzasmidur('pizza1', "Hawaiian", 'skinka, ananas', 3090, 'Stór', 'Hawaiian');









