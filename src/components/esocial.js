const Social = [
    {
        id:	'121',
        sent:	false,
        from:	"tweets@twitter.com",
        to:	"jack@test.com",
        subject:	"18	tweets	from	those	you	follow",
        text:	"Go	to	your	twitter	page	and	see	the	tweets	from	those	you	follow.",
        folder:	"Social"
    },
    {
        id:	'158',
        sent:	false,
        from:	"email@facebook.com",
        to:	"jack@test.com",
        subject:	"New	post	from	William	Jones",
        text:
                "William	Jones	has	just	uploaded	a	new	post	- How	i	loved	the	Avengers	Endgame.",
        folder:	"Social"
    },
    {
        id:	'194',
        sent:	false,
        from:	"retweet@twitter.com",
        to:	"jack@test.com",
        subject:	"Your	tweet	has	been	retweeted	by	Thomas",
        text:  "Your	tweet	on	the	Marvel	Superheroes	and	Avengers	has	been	retweeted	bt	Thomas.	It	has	now	41	retweets	and	27	likes.",
        folder:	"Social"
    },
    {
        id:	'289',
        sent:	false,
        from:	"email@facebook.com",
        to:	"jack@test.com",
        subject:	"5	Shares,	2	Posts	from	your	friends",
        text:  "Jack,	while you	were	away,	your	friends	are	having	fun	on	Facebook.\nDon't	miss	their	posts.\nKeep	up	with	your friends.",
        folder:	"Social"
    }
]

export function getSocial(){
    return Social;
}