class person{
    constructor(id, first_name, last_name, d_birth){
        this.id =  id
        this.first_name = first_name
        this.last_name = last_name
        this.d_birth = d_birth
        
    }
}

class ListNode{
    constructor(id, first_name, last_name, d_birth){
        this.p = new person(id, first_name, last_name, d_birth) 
        this.next = null
    }
    head = null;

    next = () => {
        return this.next
    }
    add = (id, first_name, last_name, d_birth, place) => {
        // -1 add to the end
        // else adds to index
        let current = head;
        let index = 1;

        if (this.head == null){
            this.head = new ListNode(id, first_name, last_name, d_birth)
        }
        if (place == -1){
            while (this.next != null){
                current = this.next()
            }
            this.next = new ListNode(id, first_name, last_name, d_birth)
        }
        else{
            while (index < place){
                if (this.next == null){
                    this.next = new ListNode(id, first_name, last_name, d_birth)
                }
                current = this.next()
                index ++;
            }
            
            this.next = new ListNode(id, first_name, last_name, d_birth)
            this.next().next = current
        
        
        }
        _person = (person) => {
            console.log(`name: ${person.first_name + person.last_name} \n id: ${person.id} \n  birth: ${person.d_birth}`)
        }
    
        find = (id) => {
            let index = 1;
            while (current.next != null){
                if (current.p.id == id){
                    console.log(`place in line: ${index}`)
                    return _person(current.p)
                }
                current = this.next
                index ++;
            }
        }
    }

}