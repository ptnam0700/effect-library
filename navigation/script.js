const s = 'javascript'
vowelsAndConsonants()

function vowelsAndConsonants() {
    const vowels = ['u', 'e', 'o', 'a', 'i'];
    
    const cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
    for (var i = 0; i < s.length; i++) {
        vowels.forEach(vowel => {
            if (s[i] == vowel){
                console.log(s[i])
            }
        })
    }

    for (var i = 0; i < s.length; i++) {
        cons.forEach(con => {
            if (s[i] == con){
                console.log(s[i])
            }
        })
    }

}
