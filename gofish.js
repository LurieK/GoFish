



const masterArr=['cat', 'dog', 'hello', 'silly', 'monkey', 'over',
'new', 'sound', 'take', 'only', 'little', 'work', 'know', 'place', 'years', 
'live', 'me', 'back', 'give', 'most', 'very', 'after', 'things', 'our', 'just', 
'name', 'good', 'sentence', 'man', 'think','cat-m', 'dog-m', 'hello-m', 'silly-m', 'monkey-m', 'over-m',
'new-m', 'sound-m', 'take-m', 'only-m', 'little-m', 'work-m', 'know-m', 'place-m', 'years-m', 'live-m', 'me-m', 
'back-m', 'give-m', 'most-m', 'very-m', 'after-m', 'things-m', 'our-m', 'just-m', 'name-m', 'good-m', 'sentence-m', 
'manv', 'think-m'];

function deal(deck) {
 arr1=[];

    while(arr1.length < 10){
        let i = Math.floor(Math.random()*deck.length);
        arr1.push(deck[i])
    }
    
    
    return arr1
    
}

// const hand1=arr1.splice(0,5)
// const hand2=arr1


function pool(cards, deck) {
    newMasterArr = [];

    for (let elm of deck) {
        if (!cards.includes(elm)) {
            newMasterArr.push(elm);
        }
    }

    return newMasterArr;
}

function splitDeal(arr){
    hand1=arr.splice(0,5);
    hand2=arr.filter(elm=>!hand1.includes (elm))
    
    return [hand1, hand2]
}



 (deal(masterArr))
console.log (pool(arr1,masterArr))
console.log (splitDeal(arr1))

///create object that explains the matches.
//create function to play the game