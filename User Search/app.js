const UserCard = document.querySelectorAll('.user')
const InputEl = document.querySelector('.username')
const Searchbtn = document.querySelector('.fa-magnifying-glass')
const Crossbtn = document.querySelector('.fa-xmark')
const Navtabs = document.querySelector('.mynav')
const Voters = document.querySelector('.Voters')
const Editors = document.querySelector('.Editors')
const Moderators = document.querySelector('.Moderators')
const user = document.querySelector('.NewUser')
const AllTab = document.querySelectorAll('.tab')


Searchbtn.addEventListener('click' ,function(){
    let Input = InputEl.value
    let UserInput = Input.split(' ').join('')

    UserCard.forEach(card =>{
        var username = card.getAttribute('data-Name')
        if(UserInput === username){
            card.style.display = 'flex'
            Crossbtn.style.display = 'block'
            
        }else{
            card.style.display = 'none'
            console.log('Not')
        }
    })
    
})

Crossbtn.addEventListener('click' ,function(){
    UserCard.forEach(card =>{
        card.style.display = 'flex'
        Crossbtn.style.display = 'none'
        InputEl.value = ''

    })
    AllTab.forEach(tab =>{
        tab.classList.remove('active')
    })
    user.classList.add('active')
})

Voters.addEventListener('click' ,function(){
    UserCard.forEach(card =>{
        var Voters1 = card.getAttribute('data-Voters')
        

        if(Voters1){
            card.style.display = 'flex'
            Crossbtn.style.display ='block'


        }else{
            card.style.display = 'none'
            Voters.classList.remove('active')
        }
    })
    
})

Editors.addEventListener('click' ,function(){
    UserCard.forEach(card =>{
        var Voters1 = card.getAttribute('data-Editors')

        if(Voters1){
            card.style.display = 'flex'
            Crossbtn.style.display ='block'
        }else{
            card.style.display = 'none'
            // Editors.classList.remove('active')
        }
    })

})

Moderators.addEventListener('click' ,function(){
    UserCard.forEach(card =>{
        var Voters1 = card.getAttribute('data-Moderators')
        
        if(Voters1){
            card.style.display = 'flex'
            Crossbtn.style.display ='block'
        }else{
            card.style.display = 'none'
            
           
        }
    })


})

user.addEventListener('click' ,function(){
    UserCard.forEach(card =>{
        card.style.display = 'flex'
        user.classList.add('active')
    })
    
})

AllTab.forEach(tab =>{
    tab.addEventListener('click' ,function(){
      
        AllTab.forEach(btn =>{
            btn.classList.remove('active')
        })
    tab.classList.add('active')
    })
})

alert(window.innerWidth)