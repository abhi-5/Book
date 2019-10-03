const Work = [
    {
        id:	'204',
        sent:	true,
        from:	"jack@test.com",
        to:	"jack@test.com",
        subject:	"To	do	on	Friday",
        text:	"Test	the	bugs	on	the	employee	form	in	Release	0.7.9	and	fix	them.",
        folder:	"Work"
    },
    {
        id:	'278',
        sent:	false,
        from:	"mary@test.com",
        to:	"jack@test.com",
        subject:	"Re:	Bug	461	in	Customer	Flow",
        text:
                "The	bug	has	been	fixed	in	the	release	0.8.7.	\nPlease	test	the	issue	and	close	it.\nCan	you	do	it	but	tomorrow\nMary",
        folder:	"Work"
    },
 
]

export function getWork(){
    return Work;
}