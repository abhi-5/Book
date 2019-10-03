import React, { Component } from 'react';
import { getInbox } from './einbox';
import { getSent } from './esent';
import { getWork } from './ework';
import { getSocial } from './esocial';
import { getEmail } from './email';
import Form from './../checkbox/matchForm';

class RctSet11A extends Component {
    state = {  
        email : getEmail(),
        inbox : getInbox(),
        inboxCB : null,
        sent : getSent(),
        sentCB : null,
        drafts : [],
        draftsCB : null,
        work : getWork(),
        workCB : null,
        social : getSocial(),
        socialCB : null,
        sentMsg : { id: '', sent: '', from : 'me', to :''  , subject :'' , text: '', folder: 'Sent', selected: false } ,
        bgColor1 : '',bgColor2 : '',bgColor3 : '',bgColor4 : '',bgColor5 : '',
        search : { name : ''},
        move : { msg : ''},
        view : 0,
        codetype: 0,
        index1 : '', index2 : '', index3 : '', index4 : '', index5 : '', 
        reply : [],
       
    }

    constructor(props) {
        super(props);
        this.state.inboxCB = this.inboxCbStructure();
        this.state.sentCB = this.sentCbStructure();
        this.state.draftsCB = this.draftsCbStructure();
        this.state.workCB = this.workCbStructure();
        this.state.socialCB = this.socialCbStructure();
    }

    inboxCbStructure() {
        let temp = this.state.inbox.map(val => ({
            id: val.id,
            sent: val.sent,
            from: val.from,
            to: val.to,
            subject: val.subject,
            text: val.text,
            folder: val.folder,
            selected: false
        }));
        return temp;
    }
    sentCbStructure() {
        let temp = this.state.sent.map(val => ({
            id: val.id,
            sent: val.sent,
            from: val.from,
            to: val.to,
            subject: val.subject,
            text: val.text,
            folder: val.folder,
            selected: false
        }));
        return temp;
    }
    draftsCbStructure() {
        let temp = this.state.drafts.map(val => ({
            id: val.id,
            sent: val.sent,
            from: val.from,
            to: val.to,
            subject: val.subject,
            text: val.text,
            folder: val.folder,
            selected: false
        }));
        return temp;
    }
    workCbStructure() {
        let temp = this.state.work.map(val => ({
            id: val.id,
            sent: val.sent,
            from: val.from,
            to: val.to,
            subject: val.subject,
            text: val.text,
            folder: val.folder,
            selected: false
        }));
        return temp;
    }
    socialCbStructure() {
        let temp = this.state.social.map(val => ({
            id: val.id,
            sent: val.sent,
            from: val.from,
            to: val.to,
            subject: val.subject,
            text: val.text,
            folder: val.folder,
            selected: false
        }));
        return temp;
    }

    handleInboxCB = e => {
        const { currentTarget: input } = e;
        const { inboxCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = inboxCB.find(n1 => n1.id === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.setState({ inbox : this.state.inboxCB });
 
    }
    handleSentCB = e => {
        const { currentTarget: input } = e;
        const { sentCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = sentCB.find(n1 => n1.id === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.setState({ sent : this.state.sentCB });

    }
    handleDraftsCB = e => {
        const { currentTarget: input } = e;
        const { draftsCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = draftsCB.find(n1 => n1.id === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.setState({ drafts : this.state.draftsCB });

    }
    handleWorkCB = e => {
        const { currentTarget: input } = e;
        const { workCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = workCB.find(n1 => n1.id === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.setState({ work : this.state.workCB });

    }
    handleSocialCB = e => {
        const { currentTarget: input } = e;
        const { socialCB } = this.state;
        if(input.type === 'checkbox'){
            let cb = socialCB.find(n1 => n1.id === input.name);
            if(cb) cb.selected = input.checked;
        }
        this.setState({ social : this.state.socialCB });

    }

    handleDelete = () => {
        const { inboxCB, sentCB, draftsCB, workCB, socialCB } = this.state;

        const obj1 = inboxCB.filter(data => data.selected !== true);
        this.setState({ inboxCB : this.state.inboxCB = obj1 , inboxCB : this.state.inboxCB});

        const obj2 = sentCB.filter(data => data.selected !== true);
        this.setState({ sentCB : this.state.sentCB = obj2 , sentCB : this.state.sentCB});

        const obj3 = draftsCB.filter(data => data.selected !== true);
        this.setState({ draftsCB : this.state.draftsCB = obj3 , draftsCB : this.state.draftsCB});

        const obj4 = workCB.filter(data => data.selected !== true);
        this.setState({ workCB : this.state.workCB = obj4 , workCB : this.state.workCB});

        const obj5 = socialCB.filter(data => data.selected !== true);
        this.setState({ socialCB : this.state.socialCB = obj5, socialCB : this.state.socialCB });
               
    }

    handleMove = e => {
        const { inboxCB, sentCB, draftsCB, workCB, socialCB, checkbox } = this.state;
        const { currentTarget: input } = e;
        const move = {...this.state.move};
        move[input.name] = input.value; 
        console.log(input.value)

        const obj1 = inboxCB.filter(data => data.selected === true);
        const obj2 = sentCB.filter(data => data.selected === true);
        const obj3 = draftsCB.filter(data => data.selected === true);
        const obj4 = workCB.filter(data => data.selected === true);
        const obj5 = socialCB.filter(data => data.selected === true);
        
        if(input.value === 'Inbox'){

            if(obj2.length !== 0){
                let cb5 = inboxCB.concat(obj2) 
                console.log(cb5)
                this.setState({ inboxCB: this.state.inboxCB = cb5 });
                
                const obj7 = sentCB.filter(data => data.selected !== true);
                this.setState({ sentCB : this.state.sentCB = obj7 , sentCB : this.state.sentCB}); 
            }

            if(obj3.length !== 0){
                let cb6 = inboxCB.concat(obj3) 
                console.log(cb6)
                this.setState({ inboxCB: this.state.inboxCB = cb6 });
               
                const obj7 = draftsCB.filter(data => data.selected !== true);
                this.setState({ draftsCB : this.state.draftsCB = obj7 , draftsCB : this.state.draftsCB});  
            }

            if(obj4.length !== 0){
                let cb6 = inboxCB.concat(obj4) 
                console.log(cb6)
                this.setState({ inboxCB: this.state.inboxCB = cb6 });
               
                const obj7 = workCB.filter(data => data.selected !== true);
                this.setState({ workCB : this.state.workCB = obj7 , workCB : this.state.workCB});  
            }

            if(obj5.length !== 0){
                let cb6 = inboxCB.concat(obj5) 
                console.log(cb6)
                this.setState({ inboxCB: this.state.inboxCB = cb6 });
               
            const obj7 = socialCB.filter(data => data.selected !== true);
            this.setState({ socialCB : this.state.socialCB = obj7 , socialCB : this.state.socialCB});  
            }

    this.setState({ inboxCB : this.state.inboxCB.map(val => ({
                id: val.id,
                sent: val.sent,
                from: val.from,
                to: val.to,
                subject: val.subject,
                text: val.text,
                folder: val.folder,
                selected: false
            }))

    })
           
        }
        if(input.value === 'Sent'){
            if(obj1.length !== 0){
                let cb5 = sentCB.concat(obj1) 
                console.log(cb5)
                this.setState({ sentCB: this.state.sentCB = cb5 });
                
                const obj7 = inboxCB.filter(data => data.selected !== true);
                this.setState({ inboxCB : this.state.inboxCB = obj7 , inboxCB : this.state.inboxCB}); 
            }

            if(obj3.length !== 0){
                let cb6 = sentCB.concat(obj3) 
                console.log(cb6)
                this.setState({ sentCB: this.state.sentCB = cb6 });
               
                const obj7 = draftsCB.filter(data => data.selected !== true);
                this.setState({ draftsCB : this.state.draftsCB = obj7 , draftsCB : this.state.draftsCB});  
            }

            if(obj4.length !== 0){
                let cb6 = sentCB.concat(obj4) 
                console.log(cb6)
                this.setState({ sentCB: this.state.sentCB = cb6 });
               
                const obj7 = workCB.filter(data => data.selected !== true);
                this.setState({ workCB : this.state.workCB = obj7 , workCB : this.state.workCB});  
            }

            if(obj5.length !== 0){
                let cb6 = sentCB.concat(obj5) 
                console.log(cb6)
                this.setState({ sentCB: this.state.sentCB = cb6 });
               
            const obj7 = socialCB.filter(data => data.selected !== true);
            this.setState({ socialCB : this.state.socialCB = obj7 , socialCB : this.state.socialCB});  
            }

    this.setState({ sentCB : this.state.sentCB.map(val => ({
                id: val.id,
                sent: val.sent,
                from: val.from,
                to: val.to,
                subject: val.subject,
                text: val.text,
                folder: val.folder,
                selected: false
            }))

    })
        }
        if(input.value === 'Drafts'){
            if(obj1.length !== 0){
                let cb5 = draftsCB.concat(obj1) 
                console.log(cb5)
                this.setState({ draftsCB: this.state.draftsCB = cb5 });
                
                const obj7 = inboxCB.filter(data => data.selected !== true);
                this.setState({ inboxCB : this.state.inboxCB = obj7 , inboxCB : this.state.inboxCB}); 
            }

            if(obj2.length !== 0){
                let cb6 = draftsCB.concat(obj2) 
                console.log(cb6)
                this.setState({ draftsCB: this.state.draftsCB = cb6 });
               
                const obj7 = sentCB.filter(data => data.selected !== true);
                this.setState({ sentCB : this.state.sentCB = obj7 , sentCB : this.state.sentCB});  
            }

            if(obj4.length !== 0){
                let cb6 = draftsCB.concat(obj4) 
                console.log(cb6)
                this.setState({ draftsCB: this.state.draftsCB = cb6 });
               
                const obj7 = workCB.filter(data => data.selected !== true);
                this.setState({ workCB : this.state.workCB = obj7 , workCB : this.state.workCB});  
            }

            if(obj5.length !== 0){
                let cb6 = draftsCB.concat(obj5) 
                console.log(cb6)
                this.setState({ draftsCB: this.state.draftsCB = cb6 });
               
            const obj7 = socialCB.filter(data => data.selected !== true);
            this.setState({ socialCB : this.state.socialCB = obj7 , socialCB : this.state.socialCB});  
            }

    this.setState({ draftsCB : this.state.draftsCB.map(val => ({
                id: val.id,
                sent: val.sent,
                from: val.from,
                to: val.to,
                subject: val.subject,
                text: val.text,
                folder: val.folder,
                selected: false
            }))

    })
        console.log(draftsCB)
        }
        if(input.value === 'Work'){
            if(obj1.length !== 0){
                let cb5 = workCB.concat(obj1) 
                console.log(cb5)
                this.setState({ workCB: this.state.workCB = cb5 });
                
                const obj7 = inboxCB.filter(data => data.selected !== true);
                this.setState({ inboxCB : this.state.inboxCB = obj7 , inboxCB : this.state.inboxCB}); 
            }

            if(obj2.length !== 0){
                let cb6 = workCB.concat(obj2) 
                console.log(cb6)
                this.setState({ workCB: this.state.workCB = cb6 });
               
                const obj7 = sentCB.filter(data => data.selected !== true);
                this.setState({ sentCB : this.state.sentCB = obj7 , sentCB : this.state.sentCB});  
            }

            if(obj3.length !== 0){
                let cb6 = workCB.concat(obj3) 
                console.log(cb6)
                this.setState({ workCB: this.state.workCB = cb6 });
               
                const obj7 = draftsCB.filter(data => data.selected !== true);
                this.setState({ draftsCB : this.state.draftsCB = obj7 , draftsCB : this.state.draftsCB});  
            }

            if(obj5.length !== 0){
                let cb6 = workCB.concat(obj5) 
                console.log(cb6)
                this.setState({ workCB: this.state.workCB = cb6 });
               
            const obj7 = socialCB.filter(data => data.selected !== true);
            this.setState({ socialCB : this.state.socialCB = obj7 , socialCB : this.state.socialCB});  
            }

    this.setState({ workCB : this.state.workCB.map(val => ({
                id: val.id,
                sent: val.sent,
                from: val.from,
                to: val.to,
                subject: val.subject,
                text: val.text,
                folder: val.folder,
                selected: false
            }))

    })
        }

        if(input.value === 'Social'){
            console.log(input.value)
            console.log(obj1 )
            console.log(obj2 )
                if(obj1.length !== 0){
                    let cb5 = socialCB.concat(obj1) 
                    console.log(cb5)
                    this.setState({ socialCB: this.state.socialCB = cb5 });
                    
                const obj7 = inboxCB.filter(data => data.selected !== true);
                this.setState({ inboxCB : this.state.inboxCB = obj7 , inboxCB : this.state.inboxCB});  
                }

                if(obj2.length !== 0){
                    let cb6 = socialCB.concat(obj2) 
                    console.log(cb6)
                    this.setState({ socialCB: this.state.socialCB = cb6 });
                   
                const obj7 = sentCB.filter(data => data.selected !== true);
                this.setState({ sentCB : this.state.sentCB = obj7 , sentCB : this.state.sentCB});  
                }

                if(obj3.length !== 0){
                    let cb6 = socialCB.concat(obj3) 
                    console.log(cb6)
                    this.setState({ socialCB: this.state.socialCB = cb6 });
                   
                const obj7 = draftsCB.filter(data => data.selected !== true);
                this.setState({ draftsCB : this.state.draftsCB = obj7 , draftsCB : this.state.draftsCB});  
                }

                if(obj4.length !== 0){
                    let cb6 = socialCB.concat(obj4) 
                    console.log(cb6)
                    this.setState({ socialCB: this.state.socialCB = cb6 });
                   
                const obj7 = workCB.filter(data => data.selected !== true);
                this.setState({ workCB : this.state.workCB = obj7 , workCB : this.state.workCB});  
                }

        this.setState({ socialCB : this.state.socialCB.map(val => ({
                    id: val.id,
                    sent: val.sent,
                    from: val.from,
                    to: val.to,
                    subject: val.subject,
                    text: val.text,
                    folder: val.folder,
                    selected: false
                }))

        })
                     
           
        }

       
        this.setState({ move })
        this.setState({ move: { msg: ''} })
        console.log(this.state.search)
    }

    handleSearch = e => {
        e.preventDefault();
        const { currentTarget: input } = e;
        const search = {...this.state.search};
        search[input.name] = input.value;
        this.setState({ search })
        console.log(input.value)
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { search, email } = this.state;
        let str = 'William'.toLowerCase().split('');
      //  const filter = this.state.email.filter(data => data === this.state.search);
        console.log( email.filter(val => {
            let s1 = false;
            str.forEach(word => {
                if('William'.toLowerCase().includes(word))
                s1 = true;
            })
            if(s1)
            return val;
        }))
    }
   

    handleChange = e => {
        const { currentTarget: input } = e;
        const sentMsg = {...this.state.sentMsg};
        sentMsg[input.name] = input.value;
        this.setState({ sentMsg });

        const reply = {...this.state.reply};
        reply[input.name] = input.value;
        this.setState({ reply });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.state.sentCB.push(this.state.sentMsg)
        this.setState({ sentCB : this.state.sentCB });
       
        this.setState({ 
            sentMsg : this.state.sentMsg = { id: '', sent: '', from : 'me', to :''  , subject :'' , text: '', folder: 'Sent', selected: false } ,
            
            sentCB : this.state.sentCB.map(val => ({
                id: val.id,
                sent: val.sent,
                from: val.from,
                to: val.to,
                subject: val.subject,
                text: val.text,
                folder: val.folder,
                selected: false
            }))
        })  
         
        console.log(this.state.sentCB);
    }

    handleInbox = () => {
        console.log(this.state.search)
        this.setState({bgColor2 : '',bgColor3 : '',bgColor4 : '',bgColor5 : '',})
        this.setState({ view : 1, codetype : 1, bgColor1 : 'yellow', })
        
        this.setState({ inbox : this.state.inboxCB });
    }
    handleSent = () => {
        this.setState({bgColor1 : '',bgColor3 : '',bgColor4 : '',bgColor5 : '',})
        console.log(this.state.inbox)
        this.setState({ view : 2, codetype : 2, bgColor2 : 'yellow' })
        this.setState({ sent : this.state.sentCB });
    }
    handleDraft = () => {
        this.setState({bgColor1 : '',bgColor2 : '',bgColor4 : '',bgColor5 : '',})
        this.setState({drafts : this.state.draftsCB, codetype : 3, view : 3, bgColor3 : 'yellow' , checkbox : {} })
    }
    handleWork = () => {
        this.setState({bgColor1 : '',bgColor2 : '',bgColor3 : '',bgColor5 : '',})
     
        this.setState({ view : 4, codetype : 4, bgColor4 : 'yellow', checkbox : { } })
        this.setState({ workCB : this.state.workCB  });
     
    }
    handleSocial = () => {
        this.setState({bgColor1 : '',bgColor2 : '',bgColor3 : '',bgColor4 : ''})
        this.setState({ view : 5, codetype : 5, bgColor5 : 'yellow' })
        this.setState({ socialCB : this.state.socialCB.map(val => ({
                                            id: val.id,
                                            sent: val.sent,
                                            from: val.from,
                                            to: val.to,
                                            subject: val.subject,
                                            text: val.text,
                                            folder: val.folder,
                                            selected: false
                                        }))
         });
        
    }

    handleCompose = () => {
        this.setState({bgColor1 : '',bgColor2 : '',bgColor3 : '',bgColor4 : '',bgColor5 : ''})
        this.setState({ view : 6 });
    }

    handleEdit = data => {
        console.log(data)
        const index1 = this.state.inboxCB.findIndex(val => val === data);
        const index2 = this.state.sentCB.findIndex(val => val === data);
        const index3 = this.state.draftsCB.findIndex(val => val === data);
        const index4 = this.state.workCB.findIndex(val => val === data);
        const index5 = this.state.socialCB.findIndex(val => val === data);
        console.log(index2)
        this.setState({
            index1 : index1,
            index2 : index2,
            index3 : index3,
            index4 : index4,
            index5 : index5,
            reply : this.state.reply = data,
            view : 7
        });
    }

    handleReply = () => {
        console.log(this.state.reply);
        this.setState({ view : 8 });
    }

    handleUpdate = (e) => {
        e.preventDefault();
        const index1 = this.state.index1 ;
        const index2 = this.state.index2 ;
        const index3 = this.state.index3 ;
        const index4 = this.state.index4 ;
        const index5 = this.state.index5 ;
        const inboxCB = [...this.state.inboxCB];
        inboxCB[index1] = this.state.reply;
        const sentCB = [...this.state.sentCB];
        sentCB[index2] = this.state.reply;
        const draftsCB = [...this.state.draftsCB];
        draftsCB[index3] = this.state.reply;
        const workCB = [...this.state.workCB];
        workCB[index4] = this.state.reply;
        const socialCB = [...this.state.socialCB];
        socialCB[index5] = this.state.reply;
        this.setState({inboxCB, sentCB, draftsCB, workCB, socialCB, view : 7 });
        
    }

    renderDrop(){
         return (
            <div className="col">
            <div className="row">
                 <button onClick={this.handleDelete} className="btn btn-primary btn-sm mr-3 col-2">Delete</button>             
                <select 
                    value={this.state.move.msg}
                    onChange={this.handleMove}
                    id="msg"
                    name="msg"
                    className="form-control form-control-sm col-3"
                >
                    <option value="" selected disabled> Move To </option>
                    <option>Inbox</option>
                    <option>Sent</option>
                    <option>Drafts</option>
                    <option>Work</option>
                    <option>Social</option>
                </select>
            </div>
            </div>
         )
    }

    renderBtn(){
        if(this.state.codetype === 1){
        if(this.state.inboxCB.length === 0) return <div><h5>There are No messages</h5></div>
       
        return (
            <div className="container">
            <div className="row">
                <div className="col">
                    <h5>Showing messages 1-{this.state.inboxCB.length} of {this.state.inboxCB.length}</h5>
                </div>
                <div className="col">
                    <div className="row">
                    {this.renderDrop()} 
                    </div>
                </div>
            </div>
            </div>
            )
        }
        if(this.state.codetype === 2){
            if(this.state.sentCB.length === 0) return <div><h5>There are No messages</h5></div>
           
            return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Showing messages 1-{this.state.sentCB.length} of {this.state.sentCB.length}</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                        {this.renderDrop()} 
                        </div>
                    </div>
                </div>
                </div>
                )
            }
        if(this.state.codetype === 3){
            if(this.state.draftsCB.length === 0) return <div><h5>There are No messages</h5></div>
            
            return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Showing messages 1-{this.state.draftsCB.length} of {this.state.draftsCB.length}</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                        {this.renderDrop()} 
                        </div>
                    </div>
                </div>
                </div>
                )
            }
        if(this.state.codetype === 4){
            if(this.state.workCB.length === 0) return <div><h5>There are No messages</h5></div>
            
            return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Showing messages 1-{this.state.workCB.length} of {this.state.workCB.length}</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                        {this.renderDrop()} 
                        </div>
                    </div>
                </div>
                </div>
                )
            }
        if(this.state.codetype === 5){
            if(this.state.socialCB.length === 0) return <div><h5>There are No messages</h5></div>
            
            return (
                <div className="container">
                <div className="row">
                    <div className="col">
                        <h5>Showing messages 1-{this.state.socialCB.length} of {this.state.socialCB.length}</h5>
                    </div>
                    <div className="col">
                        <div className="row">
                        {this.renderDrop()} 
                        </div>
                    </div>
                </div>
                </div>
                )
            }
    }

    renderNav(){
        return (
            <div>
              <nav className="navbar navbar-light bg-dark" >
                <a className="navbar-brand" style={{color:'white'}} href="#"> MyMessages </a>
                <a className="navbar-brand mr-auto">

                {/* <form ref="myForm" className="myForm" onSubmit={this.submitHandler}>
                    <div className="form-group">
                    <input 
                        value={this.state.search.name}
                        onChange={this.handleSearch}
                        id="name"
                        name="name"
                        type="text" 
                        className="form-control" 
                    />
                    </div>
                </form> */}

                </a>
              </nav><br/>
                <div className="row">
                  <div className="col-3"> </div>
                  <div className="col">  </div>
                </div>
            </div>
        );
    }
    
    renderList(){
       return (
           <div>               
                <button onClick={this.handleCompose} className="btn btn-primary btn-sm">Compose</button>
                <div style={{cursor : 'pointer', background : this.state.bgColor1}} onClick={this.handleInbox}>
                    Inbox({this.state.inboxCB.length})</div>
                <div style={{cursor : 'pointer', background : this.state.bgColor2}} onClick={this.handleSent}>
                    Sent({this.state.sentCB.length})</div>
                <div style={{cursor : 'pointer', background : this.state.bgColor3}} onClick={this.handleDraft}>
                    Drafts({this.state.draftsCB.length})</div>
                <div style={{cursor : 'pointer', background : this.state.bgColor4}} onClick={this.handleWork}>
                    Work({this.state.workCB.length})</div>
                <div style={{cursor : 'pointer', background : this.state.bgColor5}} onClick={this.handleSocial}>
                    Social({this.state.socialCB.length})</div>
           </div>
       )
    }

    render() { 
        if(this.state.view === 0) {
        return ( 
            <div className="container">
                {this.renderNav()}
                
                <div className="row">
                    <div className="col-3">
                       {this.renderList()}
                    </div>
                </div>
            </div>
         );
            }
            if(this.state.view === 1){
                return ( 
                    <div className="container">
                        {this.renderNav()}
                        
                        <div className="row">
                            <div className="col-3">
                               {this.renderList()}
                            </div>
        
                        <div className="col">
        
                            <div className="container">
                                {this.renderBtn()}
                                
                                {this.state.inboxCB.map((data,i) => {
                                    return (
                                        <div className="row bg-light border" >
                                            <div className="form-check" key={i}>
                                                <input
                                                    value={data.selected}
                                                    onChange={this.handleInboxCB}
                                                    id={data.id}  
                                                    name={data.id}
                                                    type="checkbox"
                                                    checked={data.selected}
                                                    className="form-check-input"
                                                />
                                            </div>
                                            <div className="col-3" onClick={() => this.handleEdit(data)}>
                                                {data.from} 
                                            </div>
                                            <div className="col-3" onClick={() => this.handleEdit(data)}>
                                                {data.subject}
                                            </div>
                                            <div className="col-5" onClick={() => this.handleEdit(data)}>
                                                {data.text}
                                            </div>
                                            </div>
                                            );
                                        })}
                                            
                            </div>                  
                        </div>
                        </div>
                    </div>
                 );

            }
            if(this.state.view === 2){
                return ( 
                    <div className="container">
                        {this.renderNav()}
                        
                        <div className="row">
                            <div className="col-3">
                               {this.renderList()}
                            </div>
        
                        <div className="col">
        
                            <div className="container">
                                {this.renderBtn()}
                                
                                {this.state.sentCB.map((data,i) => {
                                    return (
                                        <div className="row bg-light border" >
                                            <div className="form-check" key={i}>
                                                <input
                                                    value={data.selected}
                                                    onChange={this.handleSentCB}
                                                    id={data.id}  
                                                    name={data.id}
                                                    type="checkbox"
                                                    checked={data.selected}
                                                    className="form-check-input"
                                                />
                                            </div>
                                            
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.from} 
                                        </div>
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.subject}
                                        </div>
                                        <div className="col-5" onClick={() => this.handleEdit(data)}>
                                            {data.text}
                                        </div>
                                        </div>
                                    );
                                })}                   
                            </div>                  
                        </div>
                        </div>
                    </div>
                 );

            }
            if(this.state.view === 3){
                return ( 
                    <div className="container">
                        {this.renderNav()}
                        
                        <div className="row">
                            <div className="col-3">
                               {this.renderList()}
                            </div>
        
                        <div className="col">
        
                            <div className="container"> 
                                {this.renderBtn()}
                                
                                {this.state.draftsCB.map((data,i) => {
                                    return (
                                        <div className="row bg-light border" >
                                            <div className="form-check" key={i}>
                                                <input
                                                    value={data.selected}
                                                    onChange={this.handleDraftsCB}
                                                    id={data.id}  
                                                    name={data.id}
                                                    type="checkbox"
                                                    checked={data.selected}
                                                    className="form-check-input"
                                                />
                                            </div>
                                            
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.from} 
                                        </div>
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.subject}
                                        </div>
                                        <div className="col-5" onClick={() => this.handleEdit(data)}>
                                            {data.text}
                                        </div>
                                        </div>
                                    );
                                })}                   
                            </div>                  
                        </div>
                        </div>
                    </div>
                 );

            }
            if(this.state.view === 4){
                return ( 
                    <div className="container">
                        {this.renderNav()}
                        
                        <div className="row">
                            <div className="col-3">
                               {this.renderList()}
                            </div>
        
                        <div className="col">
        
                            <div className="container">
                                {this.renderBtn()}
                                
                                {this.state.workCB.map((data,i) => {
                                    return (
                                        <div className="row bg-light border" >
                                            <div className="form-check" key={i}>
                                                <input
                                                    value={data.selected}
                                                    onChange={this.handleWorkCB}
                                                    id={data.id}  
                                                    name={data.id}
                                                    type="checkbox"
                                                    checked={data.selected}
                                                    className="form-check-input"
                                                />
                                            </div>
                                            
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.from} 
                                        </div>
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.subject}
                                        </div>
                                        <div className="col-5" onClick={() => this.handleEdit(data)}>
                                            {data.text}
                                        </div>
                                        </div>
                                    );
                                })}                   
                            </div>                  
                        </div>
                        </div>
                    </div>
                 );

            }
            if(this.state.view === 5){
                return ( 
                    <div className="container">
                        {this.renderNav()}
                        
                        <div className="row">
                            <div className="col-3">
                               {this.renderList()}
                            </div>
        
                        <div className="col">
        
                            <div className="container">
                                {this.renderBtn()}
                                
                                {this.state.socialCB.map((data,i) => {
                                    return (
                                        <div className="row bg-light border" >
                                            <div className="form-check" key={i}>
                                                <input
                                                    value={data.selected}
                                                    onChange={this.handleSocialCB}
                                                    id={data.id}  
                                                    name={data.id}
                                                    type="checkbox"
                                                    checked={data.selected}
                                                    className="form-check-input"
                                                />
                                            </div>
                                            
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.from} 
                                        </div>
                                        <div className="col-3" onClick={() => this.handleEdit(data)}>
                                            {data.subject}
                                        </div>
                                        <div className="col-5" onClick={() => this.handleEdit(data)}>
                                            {data.text}
                                        </div>
                                        </div>
                                    );
                                })}                   
                            </div>                  
                        </div>
                        </div>
                    </div>
                 );

            }
            
            if(this.state.view === 6){
                return(
                    <div className="container">
                        {this.renderNav()}

                <div className="row">
                    <div className="col-3">
                        {this.renderList()}
                    </div>

                <div className="col">                  
                   <form ref="myForm" className="myForm">
                        <label>To</label>
                        <div className="form-group">
                            <input 
                                value={this.state.sentMsg.to}
                                onChange={this.handleChange}  
                                name="to"
                                id="to" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <label>Subject</label>
                        <div className="form-group">
                            <input 
                                value={this.state.sentMsg.subject}
                                onChange={this.handleChange}  
                                name="subject"
                                id="subject" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                        <label>Message</label>
                        <div className="form-group">
                            <input 
                                value={this.state.sentMsg.text}
                                onChange={this.handleChange}  
                                name="text"
                                id="text" 
                                type="text" 
                                className="form-control" 
                            />
                        </div>
                    </form>
                    <button onClick={this.handleSubmit} className="btn btn-primary btn-md">Send</button>                         
                       
                </div>
                </div>
            </div>
            );
        }
        if(this.state.view === 7){
            return(
                <div className="container">
                    {this.renderNav()}
                    <div className="container">
            <div className="row">
                <div className="col-3">
                    {this.renderList()}
                </div>
           
            <div className="col border">                  
               
                        <div>
                           <label style={{float:'left', width:'25%', textAlign: 'left' }}>From : </label> 
                           <label style={{float:'center', width:'25%' }}> {this.state.reply.from}</label>  <br/>
                           <label style={{float:'left', width:'25%', textAlign: 'left' }}>To : </label> 
                           <label style={{float:'center', width:'25%' }}> {this.state.reply.to}</label>  <br/>
                           <label style={{float:'left', width:'25%', textAlign: 'left' }}>Subject : </label> 
                           <label style={{float:'center', width:'30%' }}> {this.state.reply.subject}</label>  <br/>
                           <label style={{float:'left', width:'25%', textAlign: 'left' }}>Messages : </label> 
                           <label style={{float:'center', width:'35%' }}> {this.state.reply.text}</label>  
                        </div>
                  
                <button onClick={this.handleReply} className="btn btn-secondary btn-sm">Reply</button>                         
                </div>
            </div>
            </div>
        </div>
        );
    }
    if(this.state.view === 8){
        return(
            <div className="container">
                {this.renderNav()}

        <div className="row">
            <div className="col-3">
                {this.renderList()}
            </div>

        <div className="col">                  
           <form ref="myForm" className="myForm">
                <label>To</label>
                <div className="form-group">
                    <input 
                        value={this.state.reply.to}
                        onChange={this.handleChange}  
                        name="to"
                        id="to" 
                        type="text" 
                        className="form-control" 
                    />
                </div>
                <label>Subject</label>
                <div className="form-group">
                    <input 
                        value={this.state.reply.subject}
                        onChange={this.handleChange}  
                        name="subject"
                        id="subject" 
                        type="text" 
                        className="form-control" 
                    />
                </div>
                <label>Message</label>
                <div className="form-group">
                    <textarea 
                        value={this.state.reply.text}
                        onChange={this.handleChange}  
                        name="text"
                        id="text" 
                        row="5" 
                        className="form-control"
                    />
                </div>
            </form><br/>
            <button onClick={this.handleUpdate} className="btn btn-primary btn-sm">Send</button>                         
               
        </div>
        </div>
    </div>
    );
}
    }
}
 
export default RctSet11A;