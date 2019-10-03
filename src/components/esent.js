const Sent = [
	{
        id:	'141',
        sent:	true,
        from:	"me",
        to:	"mary@test.com",
        subject:	"Bug	461	in	Customer	Flow",
        text:		"When	the checkbox	is	left	unchecked	and	the	option	Important	is	selected	in	the	dropdown,	clicking	on	Submit,	shows no	results.",
        folder:	"Sent"
    },
    {
        id:	'177',
        sent:	true,
        from:	"me",
        to:	"williams@test.com",
        subject:	"Movie	tomorrow",
        text:	"Avengers	Endgame	is	releasing	tomorrow.	Wanna	see.",
        folder:	"Sent"
    },
    {
        id:	'281',
        sent:	true,
        from:	"me",
        to:	"mary@test.com",
        subject:	"Re:	Re:	Bug	461	in	Customer	Flow",
        text:	"Bug	461	has	been	closed.\nRegards,\nJack",
        folder:	"Sent"
    },
]

export function getSent() {
    return Sent;
}