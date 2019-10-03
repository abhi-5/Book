const Inbox = [
    {
        id:	'179',
        sent:	false,
        from:	"williams@test.com",
        to:	"jack@test.com",
        subject:	"Re:	Movie	tomorrow",
        text: "The	movie	is	supposed	to	be	a	blast.	Lets	do	the	8:30	show.	Want	to	have	a	quick	bite	before.",
        folder:	"Inbox"
    },
    {
        id:	'255',
        sent:	true,
        from:	"mary@test.com",
        to:	"jack@test.com",
        subject:	"Release	0.8.4	deployed",
        text:	"Release	0.8.4	has	been	deployed	in	the	test	environment.",
        folder:	"Inbox"
    },
]

export function getInbox() {
    return Inbox;
  }