class person{
    /**
     * 
     * @param {string} f_name  
     * @param {string} l_name 
     * @param {number} age 
     * @param {string} work 
     * @param {string} lives 
     */
    constructor(f_name, l_name, age, work, lives){
        this.f_name = f_name
        this.l_name = l_name
        this.full_name = f_name + l_name
        this.age = age
        this.work = work
        this.lives = lives
    }
}
/**
 * @param {object} person 
*/
class Node{
    constructor(person){
        this.person = person
        this.relation = []
    }
    pesons = []

    add_p = (f_name, l_name, age, work, lives) => {
        let person1 = new Node(new person(f_name, l_name, age, work, lives))
        this.pesons.append(person1)
        for(p1 in this.pesons){
            if (p1.person.full_name == person1.person.full_name){
                continue
            }
            for ([age, work, lives] in p1.person){
                if (age == person1.person.age && work == person1.person.work || lives == person1.person.lives ){
                    person1.relation.append(p1.person)
                    p1.person.append(person1.person)
                }
            }
            }
        }

    remove_p = () => {
        for (p in this.pesons){
            for (r in this.relation){
                if (r.person.full_name == this.person.full_name){
                    r.relation.remove(this.person)
                }
            }
        
        this.pesons.remove(this.person)
        
    }
        }

    __str__ = () =>{
        for (p in this.relation){
            let name = p.person.full_name
            console.log(name)
        }
    find=(__name__, name)=>{
        for(let person in this.pesons){
            if(person.__name__==name){
                person.__str__()
            }
        }

    }
    // '''view_relations=()=>{'


    
    }    
}


