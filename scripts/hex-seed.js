var mongoose = require('mongoose'),
    Hexagram = require('../models/hexagram');

mongoose.connect('mongodb://localhost/i-ching-api');

var hexagramData = [
  {
    title: "The Creative",
    hexNumber: 1,
    unicodeCharacter: "䷀",
    interpretation: "represents what is great and originating, penetrating, advantageous correct and firm. If the host of dragons thus appearing were to divest themselves of their heads, there would be good fortune.",
    lines: {
      1: "In the first or lowest line, undivided, we see its subject as the dragon lying hid in the deep. It is not the time for active doing.",
      2: "In the second line, undivided, we see its subject as the dragon appearing in the field. It will be advantageous to meet with the great man.",
      3: "In the third line, undivided, we see its subject as the superior man active and vigilant all the day, and in the evening still careful and apprehensive. The position is dangerous, but there will be no mistake.",
      4: "In the fourth line, undivided, we see its subject as the dragon looking as if he were leaping up, but still in the deep. There will be no mistake.",
      5: "In the fifth line, undivided, we see its subject as the dragon on the wing in the sky. It will be advantageous to meet with the great man.",
      6: "In the sixth or topmost line, undivided, we see its subject as the dragon exceeding the proper limits. There will be occasion for repentance."
    }
  },{
    title: "The Receptive",
    hexNumber: 2,
    unicodeCharacter: "䷁",
    interpretation: "represents what is great and originating, penetrating, advantageous, correct and having the firmness of nature. When the superior man has to make any movement, if he taks the initiative, he will go astray; if he follow, he will find his proper lord. The advantageousness will be seen in getting friends in the south-west, and losing friends in the north-east. If he rest in correctness and firmness, there will be good fortune.",
    lines: {
      1: "The first line, divided, we see the subject is treading on hoarfrost. The strong ice will come by and by.",
      2: "THe second line, divided, shows the attribute of being straight, square, and great. Its operation, without repeated efforts, will be in every respect, advantageous.",
      3: "The third line, divided, shows the symbol of keeping his excellence under restraint, but firmly maintaining it. if he should have occasion to engage in the king's service, though he will not claim the success for himself, he will bring affairs to a good issue.",
      4: "The fourth line, divided, shows the symbol of a sack tied up. There will be no ground for blame or for praise.",
      5: "The fifth line, divided, shows the yellow lower garment. There will be great good fortune.",
      6: "The sixth line divided, shows dragons fighting in the wild. Their blood is purple and yellow."
    }
  }, {
    title: "Difficulty at the Beginning",
    hexNumber: 3,
    unicodeCharacter: "䷂",
    interpretation: "indicates that in the case which it presupposes there will be great progress and success, and the advantage will come from being correct and firm. But any movement in advance should not be lightly undertaken. There will be advantage in appointing feudal princes.",
    lines: {
      1: "The first line, undivided, shows the difficulty its subject has in advancing. It will be advantageous for him to abide correct and firm ; advantageous also to be made a feudal ruler.",
      2: "The second line, divided, shows its subject distressed and obliged to return ; even the horses of her chariot also seem to be retreating. But not by a spoiler is she assailed, but by one who seeks her to be his wife. The young lady maintains her firm correctness, and declines a union. After ten years she will be united, and have children.",
      3: "The third line, divided, shows one following the deer without the guidance of the forester, and only finding himself in the midst of the forest. The superior man, acquainted with the secret risks, thinks it better to give up the chase. If he went forward, he would regret it.",
      4: "The fourth line, divided, shows its subject as a lady, the horses of whose chariot appear in retreat. She seeks, however, the help of him who seeks her to be his wife. Advance will be fortunate; all will turn out advantageously.",
      5: "The fifth line, undivided, shows the difficulties in the way of its subject's dispensing the rich favours that might be expected from him. With firmness and correctness there will be good fortune in small things ; even with them in great things there will be evil.",
      6: "The topmost line, divided, shows its subject with the horses of his chariot obliged to retreat, and weeping tears of blood in streams."
    }
  },{
    title: "Youthful Folly",
    hexNumber: 4,
    unicodeCharacter: "䷃",
    interpretation: "indicates that in the case which it presupposes there will be progress and success. I do not go and seek the youthful and inexperienced, but he comes and seeks me. When he shows the sincerity that marks the first recourse to divination, I instruct him. If he apply a second and third time, that is troublesome ; and I do not instruct the troublesome. There will be advantage in being firm and correct.",
    lines: {
      1: "The first line, divided, has respect to the dispelling of ignorance. It will be advantageous to use punishment for that purpose, and to remove the shackles from the mind. But going on in that way of punishment will give occasion for regret.",
      2: "The second line, undivided, shows its subject exercising forbearance with the ignorant, in which there will be good fortune ; and admitting even the goodness of women, which will also be fortunate. He maybe described also as a son able to sustain the burden of his family.",
      3: "The third line, divided, seems to say that one should not marry a woman whose emblem it might be, for that, when she sees a man of wealth, she will not keep her person from him, and in no wise will advantage come from her.",
      4: "The fourth line, divided, shows its subject as if bound in chains of ignorance. There will be occasion for regret.",
      5: "The fifth line, divided, shows its subject as a simple lad without experience. There will be good fortune.",
      6: "In the topmost line, undivided, we see one smiting the ignorant youth. But no advantage will come from doing him an injury. Advantage would come from warding off injury from him."
    }
  },{
    title: "Waiting",
    hexNumber: 5,
    unicodeCharacter: "䷄",
    interpretation: "intimates that, with the sincerity which is declared in it, there will be brilliant success. With firmness there will be good fortune ; and it will be advantageous to cross the great stream.",
    lines: {
      1: "The first line, undivided, shows its subject waiting in the distant border. It will be well for him constantly to maintain the purpose thus shown, in which case there will be no error.",
      2: "The second line, undivided, shows its subject waiting on the sand of the mountain stream. He will suffer the small injury of being spoken against, but in the end there will be good fortune.",
      3: "The third line, undivided, shows its subject in the mud close by the stream. He thereby invites the approach of injury.",
      4: "The fourth line, divided, shows its subject waiting in the place of blood. But he will get out of the cavern.",
      5: "The fifth line, undivided, shows its subject waiting amidst the appliances of a feast. Through his firmness and correctness there will be good fortune.",
      6: "The topmost line, divided, shows its subject entered into the cavern. But there are three guests coming, without being urged, to his help. If he receive them respectfully, there will be good fortune in the end."
    }
  },{
    title: "Conflict",
    hexNumber: 6,
    unicodeCharacter: "䷅",
    interpretation: "intimates how, though there is sincerity in one's contention, he will yet meet with opposition and obstruction; but if he cherish an apprehensive caution, there will be good fortune, while, if he must prosecute the contention to the bitter end, there will be evil. It will be advantageous to see the great man ; it will not be advantageous to cross the great stream.",
    lines: {
      1: "The first line, divided, shows its subject not perpetuating the matter about which the contention is. He will suffer the small injury of being spoken against, but the end will be fortunate.",
      2: "The second line, undivided, shows its subject unequal to the contention. If he retire and keep concealed where the inhabitants of his city are only three hundred families, he will fall into no mistake.",
      3: "The third line, divided, shows its subject keeping in the old place assigned for his support, and firmly correct. Perilous as the position is, there will be good fortune in the end. Should he perchance engage in the king's business, he will not claim the merit of achievement.",
      4: "The fourth line, undivided, shows its subject unequal to the contention. He returns to the study of Heaven's ordinances, changes his wish to contend, and rests in being firm and correct. There will be good fortune.",
      5: "The fifth line, undivided, shows its subject contending ; and with great good fortune.",
      6: "The topmost line, undivided, shows how its subject may have the leathern belt conferred on him by the sovereign, and thrice it shall be taken from him in a morning."
    }
  },{
    title: "The Army",
    hexNumber: 7,
    unicodeCharacter: "䷆",
    interpretation: "indicates how, in the case which it supposes, with firmness and correctness, and a leader of age and experience, there will be good fortune and no error.",
    lines: {
      1: "The first line, divided, shows the host going forth according to the rules for such a movement. If these be not good, there will be evil.",
      2: "The second line, undivided, shows the leader in the midst of the host. There will be good fortune and no error. The king has thrice conveyed to him the orders of his favour.",
      3: "The third line, divided, shows how the host may, possibly, have many inefficient leaders. There will be evil.",
      4: "The fourth line, divided, shows the host in retreat. There is no error.",
      5: "The fifth line, divided, shows birds in the fields, which it will be advantageous to seize and destroy. In that case there will be no error. If the oldest son leads the host, and younger men idly occupy offices assigned to them, however firm and correct he may be, there will be evil.",
      6: "The topmost line, divided, shows the great ruler delivering his charges, appointing some to be rulers of states, and others to undertake the headship of clans ; but small men should not be employed in such positions."
    }
  },{
    title: "Holding Together",
    hexNumber: 8,
    unicodeCharacter: "䷇",
    interpretation: "indicates that under the conditions which it supposes there is good fortune. But let the principal party intended in it re-examine himself, as if by divination, whether his virtue be great, unintermitting, and firm. If it be so, there will be no error. Those who have not rest will then come to him ; and with those who are too late in coming it will be ill.",
    lines: {
      1: "The first line, divided, shows its subject seeking by his sincerity to win the attachment of his object. There will be no error. Let the breast be full of sincerity as an earthenware vessel is of its contents, and it will in the end bring other advantages.",
      2: "In the second line, divided, we see the movement towards union and attachment proceeding from the inward mind. With firm correctness there will be good fortune.",
      3: "In the third line, divided, we see its subject seeking for union with such as ought not to be associated with.",
      4: "In the fourth line, divided, we see its subject seeking for union with the one beyond himself. With firm correctness there will be good fortune.",
      5: "The fifth line, undivided, affords the most illustrious instance of seeking union and attachment. We seem to see in it the king urging his pursuit of the game only in three directions, and allowing the escape of all the animals before him, while the people of his towns do not warn one another to prevent it. There will be good fortune.",
      6: "In the topmost line, divided, we see one seeking union and attachment without having taken the first step to such an end. There will be evil."
    }
  },{
    title: "The Taming of the Small",
    hexNumber: 9,
    unicodeCharacter: "䷈",
    interpretation: "indicates that under its conditions) there will be progress and success. We see dense clouds, but no rain coming from our borders in the west.",
    lines: {
      1: "The first line, undivided, shows its subject returning and pursuing his own course. What mistake should he fall into ? There will be good fortune.",
      2: "The second line, undivided, shows its subject, by the attraction of the former line, returning to the proper course. There will be good fortune.",
      3: "The third line, undivided, suggests the idea of a carriage, the strap beneath which has been removed, or of a husband and wife looking on each other with averted eyes.",
      4: "The fourth line, divided, shows its subject possessed of sincerity. The danger of bloodshed is thereby averted, and his ground for apprehension dismissed. There will be no mistake.",
      5: "The fifth line, undivided, shows its subject possessed of sincerity, and drawing others to unite with him. Rich in resources, he employs his neighbours in the same cause with himself.",
      6: "The topmost line, undivided, shows how the rain has fallen, and the onward progress is stayed; so must we value the full accumulation of the virtue represented by the upper trigram. But a wife exercising restraint, however firm and correct she may be, is in a position of peril, and like the moon approaching to the full. If the superior man prosecute his measures in such circumstances, there will be evil."
    }
  },{
    title: "Treading",
    hexNumber: 10,
    unicodeCharacter: "䷉",
    interpretation: "suggests the idea of one treading on the tail of a tiger, which does not bite him. There will be progress and success.",
    lines: {
      1: "The first line, undivided, shows its subject treading his accustomed path. If he go forward, there will be no error.",
      2: "The second line, undivided, shows its subject treading the path that is level and easy ; a quiet and solitary man, to whom, if he be firm and correct, there will be good fortune.",
      3: "The third line, divided, shows a one-eyed man who thinks he can see ; a lame man who thinks he can walk well ; one who treads on the tail of a tiger and is bitten. All this indicates ill fortune. We have a mere bravo acting the part of a great ruler.",
      4: "The fourth line, undivided, shows its subject treading on the tail of a tiger. He becomes full of apprehensive caution, and in the end there will be good fortune.",
      5: "The fifth line, undivided, shows the resolute tread of its subject. Though he be firm and correct, there will be peril.",
      6: "The sixth line, undivided, tells us to look at the whole course that is trodden, and examine the presage which that gives. If it be complete and without failure, there will be great good fortune."
    }
  },{
    title: "Peace",
    hexNumber: 11,
    unicodeCharacter: "䷊",
    interpretation: "we see the little gone and the great come. It indicates that there will be good fortune, with progress and success.",
    lines: {
      1: "The first line, undivided, suggests the idea of grass pulled up, and bringing with it other stalks with whose roots it is connected. Advance on the part of its subject will be fortunate.",
      2: "The second line, undivided, shows one who can bear with the uncultivated, will cross the Ho without a boat, does not forget the distant, and has no selfish friendships. Thus does he prove himself acting in accordance with the course of the due Mean.",
      3: "The third line, undivided, shows that, while there is no state of peace that is not liable to be disturbed, and no departure of evil men so that they shall not return, yet when one is firm and correct, as he realises the distresses that may arise, he will commit no error. There is no occasion for sadness at the certainty of such recurring changes ; and in this mood the happiness of the present may be long enjoyed.",
      4: "The fourth line, divided, shows its subject fluttering down; not relying on his own rich resources, but calling in his neighbours. They all come not as having received warning, but in the sincerity of their hearts.",
      5: "The fifth line, divided, reminds us of king Tt-yl's rule about the marriage of his younger sister. By such a course there is happiness and there will be great good fortune.",
      6: "The sixth line, divided, shows us the city wall returned into the moat. It is not the time to use the army. The subject of the line may, indeed, announce his orders to the people of his own city; but however correct and firm he may be, he will have cause for regret."
    }
  },{
    title: "Standstill",
    hexNumber: 12,
    unicodeCharacter: "䷋",
    interpretation: "there is the want of good understanding between the different classes of men, and its indication is unfavourable to the firm and correct course of the superior man. We see in it the great gone and the little come.",
    lines: {
      1: "The first line, divided, suggests the idea of grass pulled up, and bringing with it other stalks with whose roots it is connected. With firm correctness on the part of its subject, there will be good fortune and progress.",
      2: "The second line, divided, shows its subject patient and obedient. To the small man comporting himself so there will be good fortune. If the great man comport himself as the distress and obstruction require, he will have success.",
      3: "The third line, divided, shows its subject ashamed of the purpose folded in his breast.",
      4: "The fourth line, undivided, shows its subject acting in accordance with the ordination of Heaven, and committing no error. His companions will come and share in his happiness.",
      5: "In the fifth line, undivided, we see him who brings the distress and obstruction to a close, the great man and fortunate. But let him say, 'We may perish! We may perish!'so shall the state of things become firm, as if bound to a clump of bushy mulberry trees.",
      6: "The sixth line, undivided, shows the overthrow and removal of the condition of distress and obstruction. Before this there was that condition. Hereafter there will be joy."
    }
  },{
    title: "Fellowship",
    hexNumber: 13,
    unicodeCharacter: "䷌",
    interpretation: "or 'Union of men' appears here as we find it in the remote districts of the country, indicating progress and success. It will be advantageous to cross the great stream. It will be advantageous to maintain the firm correctness of the superior man.",
    lines: {
      1: "The first line, undivided, shows the representative of the union of men just issuing from his gate. There will be no error.",
      2: "The second line, divided, shows the representative of the union of men in relation with his kindred. There will be occasion for regret.",
      3: "The third line, undivided, shows its subject with his arms hidden in the thick grass, and at the top of a high mound. But for three years he makes no demonstration.",
      4: "The fourth line, undivided, shows its subject mounted on the city wall ; but he does not proceed to make the attack he contemplates. There will be good fortune.",
      5: "In the fifth line, undivided, the representative of the union of men first wails and cries out, and then laughs. His great host conquers, and he and the subject of the second line meet together.",
      6: "he topmost line, undivided, shows the representative of the union of men in the suburbs. There will be no occasion for repentance."
    }
  },{
    title: "Great Possession",
    hexNumber: 14,
    unicodeCharacter: "䷍",
    interpretation: "indicates that, under the circumstances which it implies, there will be great progress and success.",
    lines: {
      1: "In the first line, undivided, there is no approach to what is injurious, and there is no error. Let there be a realisation of the difficulty and danger of the position, and there will be no error to the end.",
      2: "In the second line, undivided, we have a large waggon with its load. In whatever direction advance is made, there will be no error.",
      3: "The third line, undivided, shows us a feudal prince presenting his offerings to the Son of Heaven. A small man would be unequal to such a duty.",
      4: "The fourth line, undivided, shows its subject keeping his great resources under restraint. There will be no error.",
      5: "The fifth line, divided, shows the sincerity of its subject reciprocated by that of all the others represented in the hexagram. Let him display a proper majesty, and there will be good fortune.",
      6: "The topmost line, undivided, shows its subject with help accorded to him from Heaven. There will be good fortune, advantage in every respect."
    }
  },{
    title: "Modesty",
    hexNumber: 15,
    unicodeCharacter: "䷎",
    interpretation: "indicates progress and success. The superior man, being humble as it implies), will have a good issue to his undertakings.",
    lines: {
      1: "The first line, divided, shows us the superior man who adds humility to humility. Even the great stream may be crossed with this, and there will be good fortune.",
      2: "The second line, divided, shows us humility that has made itself recognised. With firm correctness there will be good fortune.",
      3: "The third line, undivided, shows the superior man of acknowledged merit. He will maintain his success to the end, and have good fortune.",
      4: "The fourth line, divided, shows one, whose action would be in every way advantageous, stirring up the more his humility.",
      5: "The fifth line, divided, shows one who, without being rich, is able to employ his neighbours. He may advantageously use the force of arms. All his movements will be advantageous.",
      6: "The sixth line, divided, shows us humility that has made itself recognised. The subject of it will with advantage put his hosts in motion ; but he will only punish his own towns and state."
    }
  },{
    title: "Enthusiasm",
    hexNumber: 16,
    unicodeCharacter: "䷏",
    interpretation: "indicates that, in the state which it implies, feudal princes may be set up, and the hosts put in motion, with advantage.",
    lines: {
      1: "The first line, divided, shows its subject proclaiming his pleasure and satisfaction. There will be evil.",
      2: "The second line, divided, shows one who is firm as a rock. He sees a thing without waiting till it has come to pass ; with his firm correctness there will be good fortune.",
      3: "The third line, divided, shows one looking up for favours, while he indulges the feeling of pleasure and satisfaction. If he would understand! If he be late in doing so, there will indeed be occasion for repentance.",
      4: "The fourth line, undivided, shows him from whom the harmony and satisfaction come. Great is the success which he obtains. Let him not allow suspicions to enter his mind, and thus friends will gather around him.",
      5: "The fifth line, divided, shows one with a chronic complaint, but who lives on without dying.",
      6: "The topmost line, divided, shows its subject with darkened mind devoted to the pleasure and satisfaction of the time ; but if he change his course even when it may be considered as completed, there will be no error."
    }
  },{
    title: "Following",
    hexNumber: 17,
    unicodeCharacter: "䷐",
    interpretation: "indicates that under its conditions there will be great progress and success. But it will be advantageous to be firm and correct. There will then be no error.",
    lines: {
      1: "The first line, undivided, shows us one changing the object of his pursuit ; but if he be firm and correct, there will be good fortune. Going beyond his own gate to find associates, he will achieve merit.",
      2: "The second line, divided, shows us one who cleaves to the little boy, and lets go the man of age and experience.",
      3: "The third line, divided, shows us one who cleaves to the man of age and experience, and lets go the little boy. Such following will get what it seeks; but it will be advantageous to adhere to what is firm and correct.",
      4: "The fourth line, undivided, shows us one followed and obtaining adherents. Though he be firm and correct, there will be evil. If he be sincere however in his course, and make that evident, into what error will he fall?",
      5: "The fifth line, undivided, shows us the ruler sincere in fostering all that is excellent. There will be good fortune.",
      6: "The topmost line, divided, shows us that sincerity firmly held and clung to, yea, and bound fast. We see the king with it presenting his offerings on the western mountain."
    }
  },{
    title: "Work on the Decayed",
    hexNumber: 18,
    unicodeCharacter: "䷑",
    interpretation: "indicates great progress and success to him who deals properly with the condition represented by it. There will be advantage in efforts like that of crossing the great stream. He should weigh well, however, the events of three days before the turning point, and those to be done three days after it.",
    lines: {
      1: "The first line, divided, shows a son dealing with the troubles caused by his father. If he be an able son, the father will escape the blame of having erred. The position is perilous, but there will be good fortune in the end.",
      2: "The second line, undivided, shows a son dealing with the troubles caused by his mother. He should not carry his firm correctness to the utmost.",
      3: "The third line, undivided, shows a son dealing with the troubles caused by his father. There may be some small occasion for repentance, but there will not be any great error.",
      4: "The fourth line, divided, shows a son viewing indulgently the troubles caused by his father. If he go forward, he will find cause to regret it.",
      5: "The fifth line, divided, shows a son dealing with the troubles caused by his father. He obtains the praise of using the fit instrument for his work.",
      6: "The sixth line, undivided, shows us one who does not serve either king or feudal lord, but in a lofty spirit prefers to attend to his own affairs."
    }
  },{
    title: "Approach",
    hexNumber: 19,
    unicodeCharacter: "䷒",
    interpretation: "indicates that under the conditions supposed in it there will be great progress and success, while it will be advantageous to be firmly correct. In the eighth month there will be evil.",
    lines: {
      1: "The first line, undivided, shows its subject advancing in company with the subject of the second line. Through his firm correctness there will be good fortune.",
      2: "The second line, undivided, shows its subject advancing in company with the subject of the first line. There will be good fortune; advancing will be in every way advantageous.",
      3: "he third line, divided, shows one well pleased indeed to advance, but whose action will be in no way advantageous. If he become anxious about it however, there will be no error.",
      4: "The fourth line, divided, shows one advancing in the highest mode. There will be no error.",
      5: "The fifth line, divided, shows the advance of wisdom, such as befits the great ruler. There will be good fortune.",
      6: "The sixth line, divided, shows the advance of honesty and generosity. There will be good fortune, and no error."
    }
  },{
    title: "Contemplation",
    hexNumber: 20,
    unicodeCharacter: "䷓",
    interpretation: "shows how he whom it represents should be like the worshipper who has washed his hands, but not yet presented his offerings; with sincerity and an appearance of dignity commanding reverent regard.",
    lines: {
      1: "The first line, divided, shows the looking of a lad ; not blamable in men of inferior rank, but matter for regret in superior men.",
      2: "The second line, divided, shows one peeping out from a door. It would be advantageous if it were merely the firm correctness of a female.",
      3: "The third line, divided, shows one looking at the course of his own life, to advance or recede accordingly.",
      4: "The fourth line, divided, shows one contemplating the glory of the kingdom. It will be advantageous for him, being such as he is, to seek to be a guest of the king.",
      5: "The fifth line, undivided, shows its subject contemplating his own life course. A superior man, he will thus fall into no error.",
      6: "The sixth line, undivided, shows its subject contemplating his character to see if it be indeed that of a superior man. He will not fall into error."
    }
  },{
    title: "Biting Through",
    hexNumber: 21,
    unicodeCharacter: "䷔",
    interpretation: "indicates successful progress in the condition of things which it supposes. It will be advantageous to use legal constraints.",
    lines: {
      1: "The first line, undivided, shows one with his feet in the stocks and deprived of his toes. There will be no error.",
      2: "The second line, divided, shows one biting through the soft flesh, and going on to bite off the nose. There will be no error.",
      3: "The third line, divided, shows one gnawing dried flesh, and meeting with what is disagreeable. There will be occasion for some small regret, but no great error.",
      4: "The fourth line, undivided, shows one gnawing the flesh dried on the bone, and getting the pledges of money and arrows. It will be advantageous to him to realise the difficulty of his task and be firm, in which case there will be good fortune.",
      5: "The fifth line, divided, shows one gnawing at dried flesh, and finding the yellow gold. Let him be firm and correct, realising the peril of his position. There will be no error.",
      6: "The sixth line, undivided, shows one wearing the cangue, and deprived of his ears. There will be evil."
    }
  },{
    title: "Grace",
    hexNumber: 22,
    unicodeCharacter: "䷕",
    interpretation: "indicates that there should be free course in what it denotes. There will be little advantage however if it be allowed to advance and take the lead.",
    lines: {
      1: "The first line, divided, shows one overturning the couch by injuring its legs. The injury will go on to the destruction of all firm correctness, and there will be evil.",
      2: "The second line, divided, shows one overthrowing the couch by injuring its frame. The injury will go on to the destruction of all firm correctness, and there will be evil.",
      3: "The third line, divided, shows its subject among the overthrowers; but there will be no error.",
      4: "The fourth line, divided, shows its subject having overthrown the couch, and going to injure the skin of him who lies on it. There will be evil.",
      5: "The fifth line, divided, shows its subject leading on the others like a string of fishes, and obtaining for them the favour that lights on the inmates of the palace. There will be advantage in every way.",
      6: "The topmost line, undivided, shows its subject as a great fruit which has not been eaten. The superior man finds the people again as a chariot carrying him. The small men by their course overthrow their own dwellings."
    }
  },{
    title: "Splitting Apart",
    hexNumber: 23,
    unicodeCharacter: "䷖",
    interpretation: "????",
    lines: {
      1: "???",
      2: "???",
      3: "???",
      4: "???",
      5: "???",
      6: "???"
    }
  },{
    title: "The Return",
    hexNumber: 24,
    unicodeCharacter: "䷗",
    interpretation: "indicates that there will be free course and progress in what it denotes. The subject of it finds no one to distress him in his exits and entrances; friends come to him, and no error is committed. He will return and repeat his proper course. In seven days comes his return. There will be advantage in whatever direction movement is made.",
    lines: {
      1: "The first line, undivided, shows its subject returning from an error of no great extent, which would not proceed to anything requiring repentance. There will be great good fortune.",
      2: "The second line, divided, shows the admirable return of its subject. There will be good fortune.",
      3: "The third line, divided, shows one who has made repeated returns. The position is perilous, but there will be no error.",
      4: "The fourth line, divided, shows its subject moving right in the centre among those represented by the other divided lines, and yet returning alone to his proper path.",
      5: "The fifth line, divided, shows the noble return of its subject. There will be no ground for repentance.",
      6: "The topmost line, divided, shows its subject all astray on the subject of returning. There will be evil. There will be calamities and errors. If with his views he put the hosts in motion, the end will be a great defeat, whose issues will extend to the ruler of the state. Even in ten years he will not be able to repair the disaster."
    }
  },{
    title: "Innocence",
    hexNumber: 25,
    unicodeCharacter: "䷘",
    interpretation: "indicates great progress and success, while there will be advantage in being firm and correct. If its subject and his action be not correct, he will fall into errors, and it will not be advantageous for him to move in any direction.",
    lines: {
      1: "The first line, undivided, shows its subject free from all insincerity. His advance will be accompanied with good fortune.",
      2: "The second line, divided, shows one who reaps without having ploughed that he might reap, and gathers the produce of his third year's fields without having cultivated them the first year for that end. To such a one there will be advantage in whatever direction he may move.",
      3: "The third line, divided, shows calamity happening to one who is free from insincerity; as in the case of an ox that has been tied up. A passerby finds it and carries it off, while the people in the neighbourhood have the calamity of being accused and apprehended.",
      4: "The fourth line, undivided, shows a case in which, if its subject can remain firm and correct, there will be no error.",
      5: "The fifth line, undivided, shows one who is free from insincerity, and yet has fallen ill. Let him not use medicine, and he will have occasion for joy in his recovery.",
      6: "The topmost line, undivided, shows its subject free from insincerity, yet sure to fall into error, if he take action. His action will not be advantageous in any way."
    }
  },{
    title: "The Taming Power of the Great",
    hexNumber: 26,
    unicodeCharacter: "䷙",
    interpretation: "it will be advantageous to be firm and correct. If its subject do not seek to enjoy his revenues in his own family without taking service at court, there will be good fortune. It will be advantageous for him to cross the great stream.",
    lines: {
      1: "The first line, undivided, shows its subject in a position of peril. It will be advantageous for him to stop his advance.",
      2: "The second line, undivided, shows a carriage with the strap under it removed.",
      3: "The third line, undivided, shows its subject urging his way with good horses. It will be advantageous for him to realise the difficulty of his course, and to be firm and correct, exercising himself daily in his charioteering and methods of defence; then there will be advantage in whatever direction he may advance.",
      4: "The fourth line, divided, shows the young bull, and yet having the piece of wood over his horns. There will be great good fortune.",
      5: "The fifth line, divided, shows the teeth of a castrated hog. There will be good fortune.",
      6: "The sixth line, undivided, shows its subject as in command of the firmament of heaven. There will be progress."
    }
  },{
    title: "The Corners of the Mouth",
    hexNumber: 27,
    unicodeCharacter: "䷚",
    interpretation: "indicates that with firm correctness there will be good fortune in what is denoted by it. We must look at what we are seeking to nourish, and by the exercise of our thoughts seek for the proper aliment.",
    lines: {
      1: "The first line, undivided, seems to be thus addressed,' You leave your efficacious tortoise, and look at me till your lower jaw hangs down' There will be evil.",
      2: "The second line, divided, shows one looking downwards for nourishment, which is contrary to what is proper ; or seeking it from the height above, advance towards which will lead to evil.",
      3: "The third line, divided, shows one acting contrary to the method of nourishing. However firm he may be, there will be evil. For ten years let him not take any action, for it will not be in any way advantageous.",
      4: "The fourth line, divided, shows one looking downwards for the power to nourish. There will be good fortune. Looking with a tiger's downward unwavering glare, and with his desire that impels him to spring after spring, he will fall into no error.",
      5: "The fifth line, divided, shows one acting contrary to what is regular and proper ; but if he abide in firmness, there will be good fortune. He should not, however, try to cross the great stream.",
      6: "The sixth line, undivided, shows him from whom comes the nourishing. His position is perilous, but there will be good fortune. It will be advantageous to cross the great stream."
    }
  },{
    title: "Preponderance of the Great",
    hexNumber: 28,
    unicodeCharacter: "䷛",
    interpretation: "suggests to us a beam that is weak. There will be advantage in moving under its conditions in any direction whatever ; there will be success.",
    lines: {
      1: "The first line, divided, shows one placing mats of the white mo grass under things set on the ground. There will be no error.",
      2: "The second line, undivided, shows a decayed willow producing shoots, or an old husband in possession of his young wife. There will be advantage in every way.",
      3: "The third line, undivided, shows a beam that is weak. There will be evil.",
      4: "The fourth line, undivided, shows a beam curving upwards. There will be good fortune. If the subject of it looks for other help but that of line one, there will be cause for regret.",
      5: "The fifth line, undivided, shows a decayed willow producing flowers, or an old wife in possession of her young husband. There will be occasion neither for blame nor for praise.",
      6: "The topmost line, divided, shows its subject with extraordinary boldness wading through a stream, till the water hides the crown of his head. There will be evil, but no ground for blame."
    }
  },{
    title: "The Abysmal Water",
    hexNumber: 29,
    unicodeCharacter: "䷜",
    interpretation: "Khan, here repeated, shows the possession of sincerity, through which the mind is penetrating. Action in accordance with this will be of high value.",
    lines: {
      1: "The first line, divided, shows its subject in the double defile, and yet entering a cavern within it. There will be evil.",
      2: "The second line, undivided, shows its subject in all the peril of the defile. He will, however, get a little of the deliverance that he seeks.",
      3: "The third line, divided, shows its subject, whether he comes or goes (= descends or ascends), confronted by a defile. All is peril to him and unrest. His endeavours will lead him into the cavern of the pit. There should be no action in such a case.",
      4: "The fourth line, divided, shows its subject at a feast, with simply a bottle of spirits, and a subsidiary basket of rice, while the cups and bowls are only of earthenware. He introduces his important lessons as his ruler's intelligence admits. There will in the end be no error.",
      5: "The fifth line, undivided, shows the water of the defile not yet full, so that it might flow away; but order will soon be brought about. There will be no error.",
      6: "The topmost line, divided, shows its subject bound with cords of three strands or two strands, and placed in the thicket of thorns. But in three years he does not learn the course for him to pursue. There will be evil."
    }
  },{
    title: "The Clinging Fire",
    hexNumber: 30,
    unicodeCharacter: "䷝",
    interpretation: "indicates that, in regard to what it denotes, it will be advantageous to be firm and correct, and that thus there will be free course and success. Let its subject also nourish a docility like that of the cow, and there will be good fortune.",
    lines: {
      1: "The first line, undivided, shows one ready to move with confused steps. But he treads at the same time reverently, and there will be no mistake.",
      2: "The second line, divided, shows its subject in his place in yellow. There will be great good fortune.",
      3: "The third line, undivided, shows its subject in a position like that of the declining sun. Instead of playing on his instrument of earthenware, and singing to it, he utters the groans of an old man of eighty. There will be evil.",
      4: "The fourth line, undivided, shows the manner of its subject's coming. How abrupt it is, as with fire, with death, to be rejected by all !",
      5: "The fifth line, divided, shows its subject as one with tears flowing in torrents, and groaning in sorrow. There will be good fortune.",
      6: "The topmost line, undivided, shows the king employing its subject in his punitive expeditions. Achieving admirable merit, he breaks only the chiefs of the rebels. Where his prisoners were not their associates, he does not punish. There will be no error."
    }
  },{
    title: "Influence",
    hexNumber: 31,
    unicodeCharacter: "䷞",
    interpretation: "Hsien indicates that, on the fulfilment of the conditions implied in it, there will be free course and success. Its advantageousness will depend on the being firm and correct, as in marrying a young lady. There will be good fortune.",
    lines: {
      1: "The first line, divided, shows one moving his great toes.",
      2: "The second line, divided, shows one moving the calves of his leg. There will be evil. If he abide quiet in his place, there will be good fortune.",
      3: "The third line, undivided, shows one moving his thighs, and keeping close hold of those whom he follows. Going forward in this way will cause regret.",
      4: "The fourth line, undivided, shows that firm correctness which will lead to good fortune, and prevent all occasion for repentance. If its subject be unsettled in his movements, only his friends will follow his purpose.",
      5: "The fifth line, undivided, shows one moving the flesh along the spine above the heart. There will be no occasion for repentance.",
      6: "The sixth line, divided, shows one moving his jaws and tongue."
    }
  },{
    title: "Duration",
    hexNumber: 32,
    unicodeCharacter: "䷟",
    interpretation: "indicates successful progress and no error in what it denotes. But the advantage will come from being firm and correct; and movement in any direction whatever will be advantageous.",
    lines: {
      1: "The first line, divided, shows its subject deeply desirous of long continuance. Even with firm correctness there will be evil ; there will be no advantage in any way.",
      2: "The second line, undivided, shows all occasion for repentance disappearing.",
      3: "The third line, undivided, shows one who does not continuously maintain his virtue. There are those who will impute this to him as a disgrace. However firm he may be, there will be ground for regret.",
      4: "The fourth line, undivided, shows a field where there is no game.",
      5: "The fifth line, divided, shows its subject continuously maintaining the virtue indicated by it. In a wife this will be fortunate ; in a husband, evil.",
      6: "The topmost line, divided, shows its subject exciting himself to long continuance. There will be evil."
    }
  },{
    title: "Retreat",
    hexNumber: 33,
    unicodeCharacter: "䷠",
    interpretation: "indicates successful progress in its circumstances). To a small extent it will still be advantageous to be firm and correct.",
    lines: {
      1: "The first line, divided, shows a retiring tail. The position is perilous No movement in any direction should be made.",
      2: "The second line, divided, shows its subject holding his purpose fast as if by a thong made from the hide of a yellow ox, which cannot be broken.",
      3: "The third line, undivided, shows one retiring but bound, to his distress and peril. If he were to deal with his binders as in nourishing a servant or concubine, it would be fortunate for him.",
      4: "The fourth line, undivided, shows its subject retiring notwithstanding his likings. In a superior man this will lead to good fortune; a small man cannot attain to this.",
      5: "The fifth line, undivided, shows its subject retiring in an admirable way. With firm correctness there will be good fortune.",
      6: "The sixth line, undivided, shows its subject retiring in a noble way. It will be advantageous in every respect."
    }
  },{
    title: "The Power of the Great",
    hexNumber: 34,
    unicodeCharacter: "䷡",
    interpretation: "indicates that under the conditions which it symbolises it will be advantageous to be firm and correct.",
    lines: {
      1: "The first line, undivided, shows its subject manifesting his strength in his toes. But advance will lead to evil, most certainly.",
      2: "The second line, undivided, shows that with firm correctness there will be good fortune.",
      3: "The third line, undivided, shows, in the case of a small man, one using all his strength ; and in the case of a superior man, one whose rule is not to do so. Even with firm correctness the position would be perilous. The exercise of strength in it might be compared to the case of a ram butting against a fence, and getting his horns entangled.",
      4: "The fourth line, undivided, shows a case in which firm correctness leads to good fortune, and occasion for repentance disappears. We see the fence opened without the horns being entangled. The strength is like that in the wheel-spokes of a large waggon.",
      5: "The fifth line, divided, shows one who loses his ram-like strength in the ease of his position. But there will be no occasion for repentance.",
      6: "The sixth line, divided, shows one who may be compared to the ram butting against the fence, and unable either to retreat, or to advance as he would fain do. There will not be advantage in any respect ; but if he realise the difficulty of his position, there will be good fortune."
    }
  },{
    title: "Progress",
    hexNumber: 35,
    unicodeCharacter: "䷢",
    interpretation: "we see a prince who secures the tranquillity of the people presented on that account with numerous horses by the king, and three times in a day received at interviews.",
    lines: {
      1: "The first line, divided, shows one wishing to advance, and at the same time kept back. Let him be firm and correct, and there will be good fortune. If trust be not reposed in him, let him maintain a large and generous mind, and there will be no error.",
      2: "The second line, divided, shows its subject with the appearance of advancing, and yet of being sorrowful. If he be firm and correct, there will be good fortune. He will receive this great blessing from his grandmother.",
      3: "The third line, divided, shows its subject trusted by all around him. All occasion for repentance will disappear.",
      4: "The fourth line, undivided, shows its subject with the appearance of advancing, but like a marmot. However firm and correct he may be, the position is one of peril.",
      5: "The fifth line, divided, shows how all occasion for repentance disappears from its subject. But let him not concern himself about whether he shall fail or succeed. To advance will be fortunate, and in every way advantageous.",
      6: "The topmost line, undivided, shows one advancing his horns. But he only uses them to punish the rebellious people of his own city. The position is perilous, but there will be good fortune. Yet however firm and correct he may be, there will be occasion for regret."
    }
  },{
    title: "Darkening of the Light",
    hexNumber: 36,
    unicodeCharacter: "䷣",
    interpretation: "indicates that in the circumstances which it denotes it will be advantageous to realise the difficulty of the position, and maintain firm correctness.",
    lines: {
      1: "The first line, undivided, shows its subject, in the condition indicated by Ming 1, flying, but with drooping wings. When the superior man is revolving his going away, he may be for three days without eating. Wherever he goes, the people there may speak derisively of him.",
      2: "The second line, divided, shows its subject, in the condition indicated by Ming f, wounded in the left thigh. He saves himself by the strength of a swift horse ; and is fortunate.",
      3: "The third line, undivided, shows its subject, in the condition indicated by Ming 1, hunting in the south, and taking the great chief of the darkness. He should not be eager to make all correct at once.",
      4: "The fourth line, divided, shows its subject just entered into the left side of the belly of the dark land. But he is able to carry out the mind appropriate in the condition indicated by Ming 1, quitting the gate and courtyard of the lord of darkness.",
      5: "The fifth line, divided, shows how the count of Ki fulfilled the condition indicated by Ming t. It will be advantageous to be firm and correct.",
      6: "The sixth line, divided, shows the case where there is no light, but only obscurity. Its subject had at first ascended to the top of the sky; his future shall be to go into the earth."
    }
  },{
    title: "The Family",
    hexNumber: 37,
    unicodeCharacter: "䷤",
    interpretation: "For the realisation of what is taught in Chia Jên, or for the regulation of the family, what is most advantageous is that the wife be firm and correct.",
    lines: {
      1: "The first line, undivided, shows its subject establishing restrictive regulations in his household. Occasion for repentance will disappear.",
      2: "The second line, divided, shows its subject taking nothing on herself, but in her central place attending to the preparation of the food. Through her firm correctness there will be good fortune.",
      3: "The third line, undivided, shows its subject treating the members of the household with stern severity. There will be occasion for repentance, there will be peril, but there will also be good fortune. If the wife and children were to be smirking and chattering, in the end there would be occasion for regret.",
      4: "The fourth line, divided, shows its subject enriching the family. There will be great good fortune.",
      5: "The fifth line, undivided, shows the influence of the king extending to his family. There need be no anxiety; there will be good fortune.",
      6: "The topmost line, undivided, shows its subject possessed of sincerity and arrayed in majesty. In the end there will be good fortune."
    }
  },{
    title: "Opposition",
    hexNumber: 38,
    unicodeCharacter: "䷥",
    interpretation: "indicates that, notwithstanding the condition of things which it denotes, in small matters there will still be good success.",
    lines: {
      1: "The first line, undivided, shows that to its subject occasion for repentance will disappear. He has lost his horses, but let him not seek for them; they will return of themselves. Should he meet with bad men, he will not err in communicating with them.",
      2: "The second line, undivided, shows its subject happening to meet with his lord in a bye-passage. There will be no error.",
      3: "In the third line, divided, we see one whose carriage is dragged back, while the oxen in it are pushed back, and he is himself subjected to the shaving of his head and the cutting dff of his nose. There is no good beginning, but there will be a good end.",
      4: "The fourth line, undivided, shows its subject solitary amidst the prevailing disunion. But he meets with the good man represented by the first line, and they blend their sincere desires together. The position is one of peril, but there will be no mistake.",
      5: "The fifth line, divided, shows that to its subject occasion for repentance will disappear. With his relative and minister he unites closely and readily as if he were biting through a piece of skin. When he goes forward with this help, what error can there be?",
      6: "The topmost line, undivided, shows its subject solitary amidst the prevailing disunion. In the subject of the third line, he seems to see a pig bearing on its back a load of mud, or fancies there is a carriage full of ghosts. He first bends his bow against him, and afterwards unbends it, for he discovers that he is not an assailant to injure, but a near relative. Going forward, he shall meet with genial rain, and there will be good fortune."
    }
  },{
    title: "Obstruction",
    hexNumber: 39,
    unicodeCharacter: "䷦",
    interpretation: "advantage will be found in the south-west, and the contrary in the north-east. It will be advantageous also to meet with the great man. In these circumstances, with firmness and correctness, there will be good fortune.",
    lines: {
      1: "From the first line, divided, we learn that advance on the part of its subject will lead to greater difficulties, while remaining stationary will afford ground for praise.",
      2: "The second line, divided, shows the minister of the king struggling with difficulty on difficulty, and not with a view to his own advantage.",
      3: "The third line, undivided, shows its subject advancing, but only to greater difficulties. He remains stationary, and returns to his former associates.",
      4: "The fourth line, divided, shows its subject advancing, but only to greater difficulties. He remains stationary, and unites with the subject of the line above.",
      5: "The fifth line, undivided, shows its subject struggling with the greatest difficulties, while friends are coming to help him.",
      6: "The topmost line, divided, shows its subject going forward, only to increase the difficulties, while his remaining stationary will be productive of great merit. There will be good fortune, and it will be advantageous to meet with the great man."
    }
  },{
    title: "Deliverance",
    hexNumber: 40,
    unicodeCharacter: "䷧",
    interpretation: "advantage will be found in the south-west. If no further operations be called for, there will be good fortune in coming back to the old conditions. If some operations be called for, there will be good fortune in the early conducting of them.",
    lines: {
      1: "The first line, divided, shows that its subject will commit no error.",
      2: "The second line, undivided, shows its subject catch, in hunting, three foxes, and obtain the yellow  (= golden) arrows. With firm correctness there will be good fortune.",
      3: "The third line, divided, shows a porter with his burden, yet riding in a carriage. He will only tempt robbers to attack him. However firm and correct he may try to be, there will be cause for regret.",
      4: "To the subject of the fourth line, undivided, it is said, 'Remove your toes. Friends will then come, between you and whom there will be mutual confidence'",
      5: "The fifth line, divided, shows its subject, the superior man  (= the ruler), executing his function of removing whatever is injurious to the idea of the hexagram, in which case there will be good fortune, and confidence in him will be shown even by the small men.",
      6: "In the sixth line, divided, we see a feudal prince with his bow shooting at a falcon on the top of a high wall, and hitting it. The effect of his action will be in every way advantageous."
    }
  },{
    title: "Decrease",
    hexNumber: 41,
    unicodeCharacter: "䷨",
    interpretation: "In what is denoted by Sun, if there be sincerity in him who employs it, there will be great good fortune: freedom from error; firmness and correctness that can be maintained; and advantage in every movement that shall be made. In what shall this sincerity in the exercise of Sun be employed? Even in sacrifice two baskets of grain, though there be nothing else, may be presented.",
    lines: {
      1: "The first line, undivided, shows its subject suspending his own affairs, and hurrying away to help the subject of the fourth line. He will commit no error, but let him consider how far he should contribute of what is his for the other.",
      2: "The second line, undivided, shows that it will be advantageous for its subject to maintain a firm correctness, and that action on his part will be evil. He can give increase to his correlate without taking from himself.",
      3: "The third line, divided, shows how of three men walking together, the number is diminished by one ; and how one, walking, finds his friend.",
      4: "The fourth line, divided, shows its subject diminishing the ailment under which he labours by making the subject of the first line hasten to his help, and make him glad. There will be no error.",
      5: "The fifth line, divided, shows parties adding to the stores of its subject ten pairs of tortoise shells, and accepting no refusal. There will be great good fortune.",
      6: "The topmost line, undivided, shows its subject giving increase to others without taking from himself. There will be no error. With firm correctness there will be good fortune. There will be advantage in every movement that shall be made. He will find ministers more than can be counted by their clans."
    }
  },{
    title: "Increase",
    hexNumber: 42,
    unicodeCharacter: "䷩",
    interpretation: "indicates that (in the state which it denotes) there will be advantage in every movement which shall be undertaken, that it will be advantageous (even) to cross the great stream.",
    lines: {
      1: "The first line, undivided, shows that it will be advantageous for its subject in his position to make a great movement. If it be greatly fortunate, no blame will be imputed to him.",
      2: "The second line, divided, shows parties adding to the stores of its subject ten pairs of tortoise shells whose oracles cannot be opposed. Let him persevere in being firm and correct, and there will be good fortune. Let the king, (having the virtues thus distinguished), employ them in presenting his offerings to God, and there will be good fortune.",
      3: "The third line, divided, shows increase given to its subject by means of what is evil, so that he shall (be led to good), and be without blame. Let him be sincere and pursue the path of the Mean, (so shall he secure the recognition of the ruler, like) an officer who announces himself to his prince by the symbol of his rank.",
      4: "e fourth line, divided, shows its subject pursuing the due course. His advice to his prince is followed. He can with advantage be relied on in such a movement as that of removing the capital.",
      5: "The fifth line, undivided, shows its subject with sincere heart seeking to benefit (all below). There need be no question about it; the result will be great good fortune. (All below) will with sincere heart acknowledge his goodness.",
      6: "In the sixth line, undivided, we see one to whose increase none will contribute, while many will seek to assail him. He observes no regular rule in the ordering of his heart. There will be evil."
    }
  },{
    title: "Break-Through",
    hexNumber: 43,
    unicodeCharacter: "䷪",
    interpretation: "requires (in him who would fulfil its meaning) the exhibition (of the culprit's guilt) in the royal court, and a sincere and earnest appeal (for sympathy and support), with a consciousness of the peril (involved in cutting off the criminal). He should (also) make announcement in his own city, and show that it will not be well to have recourse at once to arms. (In this way) there will be advantage in whatever he shall go forward to.",
    lines: {
      1: "The first line, undivided, shows its subject in (the pride of) strength advancing with his toes. He goes forward, but will not succeed. There will be ground for blame.",
      2: "The second line, undivided, shows its subject full of apprehension and appealing (for sympathy and help). Late at night hostile measures may be (taken against him), but he need not be anxious about them.",
      3: "The third line, undivided, shows its subject (about to advance) with strong (and determined) looks. There will be evil. (But) the superior man, bent on cutting off (the criminal), will walk alone and encounter the rain, (till he be hated by his proper associates) as if he were contaminated (by the others). (In the end) there will be no blame against him.",
      4: "The fourth line, undivided, shows one from whose buttocks the skin has been stripped, and who walks slowly and with difficulty. (If he could act) like a sheep led (after its companions), occasion for repentance would disappear. But though he hear these words, he will not believe them.",
      5: "The fifth line, undivided, shows (the small men like) a bed of purslain, which ought to be uprooted with the utmost determination. (The subject of the line having such determination), his action, in harmony with his central position, will lead to no error or blame.",
      6: "The sixth line, divided, shows its subject without any (helpers) on whom to call. His end will be evil."
    }
  },{
    title: "Coming to Meet",
    hexNumber: 44,
    unicodeCharacter: "䷫",
    interpretation: "shows a female who is bold and strong. It will not be good to marry (such) a female.",
    lines: {
      1: "The first line, divided, shows how its subject should be kept (like a carriage) tied and fastened to a metal drag, in which case with firm correctness there will be good fortune. (But) if he move in any direction, evil will appear. He will be (like) a lean pig, which is sure to keep jumping about.",
      2: "The second line, undivided, shows its subject with a wallet of fish. There will be no error. But it will not be well to let (the subject of the first line) go forward to the guests.",
      3: "The third line, undivided, shows one from whose buttocks the skin has been stripped so that he walks with difficulty. The position is perilous, but there will be no great error.",
      4: "The fourth line, undivided, shows its subject with his wallet, but no fish in it. This will give rise to evil.",
      5: "The fifth line, undivided, (shows its subject as) a medlar tree overspreading the gourd (beneath it). If he keep his brilliant qualities concealed, (a good issue) will descend (as) from Heaven.",
      6: "The sixth line, undivided, shows its subject receiving others on his horns. There will be occasion for regret, but there will be no error."
    }
  },{
    title: "Gathering Together",
    hexNumber: 45,
    unicodeCharacter: "䷬",
    interpretation: "the king will repair to his ancestral temple. It will be advantageous (also) to meet with the great man; and then there will be progress and success, though the advantage must come through firm correctness. The use of great victims will conduce to good fortune; and in whatever direction movement is made, it will be advantageous.",
    lines: {
      1: "The first line, divided, shows its subject with a sincere desire (for union), but unable to carry it out, so that disorder is brought into the sphere of his union. If he cry out (for help to his proper correlate), all at once (his tears) will give place to smiles. He need not mind (the temporary difficulty); as he goes forward, there will be no error.",
      2: "The second line, divided, shows its subject led forward (by his correlate). There will be good fortune, and freedom from error. There is entire sincerity, and in that case (even the small offerings of) the vernal sacrifice are acceptable.",
      3: "The third line, divided, shows its subject striving after union and seeming to sigh, yet nowhere finding any advantage. If he go forward, he will not err, though there may be some small cause for regret.",
      4: "The fourth line, undivided, shows its subject in such a state that, if he be greatly fortunate, he will receive no blame.",
      5: "The fifth line, undivided, shows the union (of all) under its subject in the place of dignity. There will be no error. If any do not have confidence in him, let him see to it that (his virtue) be great, longcontinued, and firmly correct, and all occasion for repentance will disappear.",
      6: "The topmost line, divided, shows its subject sighing and weeping ; but there will be no error."
    }
  },{
    title: "Pushing Upward",
    hexNumber: 46,
    unicodeCharacter: "䷭",
    interpretation: "indicates that (under its conditions) there will be great progress and success. Seeking by (the qualities implied in it) to meet with the great man, its subject need have no anxiety. Advance to the south will be fortunate.",
    lines: {
      1: "The first line, divided, shows its subject advancing upwards with the welcome (of those above him). There will be great good fortune.",
      2: "The second line, undivided, shows its subject with that sincerity which will make even the (small) offerings of the vernal sacrifice acceptable. There will be no error.",
      3: "The third line, undivided, shows its subject ascending upwards (as into) an empty city.",
      4: "The fourth line, divided, shows its subject employed by the king to present his offerings on mount KM. There will be good fortune ; there will be no mistake.",
      5: "The fifth line, divided, shows its subject firmly correct, and therefore enjoying good fortune. He ascends the stairs (with all due ceremony).",
      6: "The sixth line, divided, shows its subject advancing upwards blindly. Advantage will be found in a ceaseless maintenance of firm correctness."
    }
  },{
    title: "Oppression",
    hexNumber: 47,
    unicodeCharacter: "䷮",
    interpretation: "there may (yet be) progress and success. For the firm and ect, the (really) great man, there will be good fortune. He will fall into no error. If he make speeches, his words cannot be made good.",
    lines: {
      1: "The first line, divided, shows its subject with bare buttocks straitened under the stump of a tree. He enters a dark valley, and for three years has no prospect (of deliverance).",
      2: "The second line, undivided, shows its subject straitened amidst his wine and viands. There come to him anon the red knee-covers (of the ruler). It will be well for him (to maintain his sincerity as) in sacrificing. Active operations (on his part) will lead to evil, but he will be free from blame.",
      3: "The third line, divided, shows its subject straitened before a (frowning) rock. He lays hold of thorns. He enters his palace, and does not see his wife. There will be evil.",
      4: "The fourth line, undivided, shows its subject proceeding very slowly (to help the subject of the first line), who is straitened by the carriage adorned with metal in front of him. There will be occasion for regret, but the end will be good.",
      5: "The fifth line, undivided, shows its subject with his nose and feet cut off. He is straitened by (his ministers in their) scarlet aprons. He is leisurely in his movements, however, and is satisfied. It will be well for him to be (as sincere) as in sacrificing (to spiritual beings).",
      6: "The sixth line, divided, shows its subject straightened, as if bound with creepers ; or in a high and dangerous position, and saying (to himself),' If I move, I shall repent it.' If he do repent of former errors, there will be good fortune in his going forward."
    }
  },{
    title: "The Well",
    hexNumber: 48,
    unicodeCharacter: "䷯",
    interpretation: "(Looking at) it, (we think of) how (the site of) a town may be changed, while (the fashion of) its wells undergoes no change. (The water of a well) never disappears and never receives (any great) increase, and those who come and those who go can draw and enjoy the benefit. If (the drawing) have nearly been accomplished, but, before the rope has quite reached the water, the bucket is broken, this is evil.",
    lines: {
      1: "The first line, divided, shows a well so muddy that men will not drink of it; or an old well to which neither birds (nor other creatures) resort",
      2: "The second line, undivided, shows a well from which by a hole the water escapes and flows away to the shrimps (and such small creatures among the grass), or one the water of which leaks away from a broken basket.",
      3: "The third line, undivided, shows a well, which has been cleared out, but is not used. Our hearts are sorry for this, for the water might be drawn out and used. If the king were (only) intelligent, both he and we might receive the benefit of it.",
      4: "The fourth line, divided, shows a well, the lining of which is well laid. There will be no error.",
      5: "he fifth line, undivided, shows a clear, limpid well, (the waters from) whose cold spring are (freely) drunk.",
      6: "The topmost line, divided, shows (the water from) the well brought to the top, which is not allowed to be covered. This suggests the idea of sincerity. There will be great good fortune."
    }
  },{
    title: "Revolution",
    hexNumber: 49,
    unicodeCharacter: "䷰",
    interpretation: "(What takes place as indicated by) 'Revolution' is believed in only after it has been accomplished. There will be great progress and success. Advantage will come from being firm and correct. (In that case) occasion for repentance will disappear.",
    lines: {
      1: "The first line, undivided, shows its subject (as if he were) bound with the skin of a yellow ox.",
      2: "The second line, divided, shows its subject making his changes after some time has passed. Action taken will be fortunate. There will be no error.",
      3: "The third line, undivided, shows that action taken by its subject will be evil. Though he be firm and correct, his position is perilous. If the change (he contemplates) have been three times fully discussed, he will be believed in.",
      4: "The fourth line, undivided, shows occasion for repentance disappearing (from its subject). Let him be believed in; and though he change (existing) ordinances, there will be good fortune.",
      5: "The fifth line, undivided, shows the great man (producing his changes) as the tiger (does when he) changes (his stripes). Before he divines (and proceeds to action), faith has been reposed in him.",
      6: "The sixth line, divided, shows the superior man producing his changes as the leopard (does when he) changes (his spots), while small men change their faces (and show their obedience). To go forward (now) would lead to evil, but there will be good fortune in abiding firm and correct."
    }
  },{
    title: "The Cauldron",
    hexNumber: 50,
    unicodeCharacter: "䷱",
    interpretation: "'The Cauldron' gives the intimation of great progress and success.",
    lines: {
      1: "The first line, divided, shows the caldron overthrown and its feet turned up. (But) there will be advantage in its getting rid of what was bad in it. (Or it shows us) the concubine (whose position is improved) by means of her son. There will be no error.",
      2: "The second line, undivided, shows the caldron with the things (to be cooked) in it. (If its subject can say),' My enemy dislikes me, but he cannot approach me/ there will be good fortune.",
      3: "The third line, undivided, shows the caldron with (the places of) its ears changed. The progress (of its subject) is (thus) stopped. The fat flesh of the pheasant (which is in the caldron) will not be eaten. But the (genial) rain will come, and the grounds for repentance will disappear. There will be good fortune in the end.",
      4: "The fourth line, undivided, shows the caldron with its feet broken ; and its contents, designed for the ruler's use, overturned and spilt. Its subject will be made to blush for shame. There will be evil.",
      5: "The fifth line, divided, shows the caldron with yellow ears and rings of metal in them. There will be advantage through being firm and correct.",
      6: "The sixth line, undivided, shows the caldron with rings of jade. There will be great good fortune, and all action taken will be in every way advantageous."
    }
  },{
    title: "The Arousing",
    hexNumber: 51,
    unicodeCharacter: "䷲",
    interpretation: "'The Arousing' gives the intimation of ease and development. When (the time of) movement (which it indicates) comes, (the subject of the hexagram) will be found looking out with apprehension, and yet smiling and talking cheerfully. When the movement (like a crash of thunder) terrifies all within a hundred 11, he will be (like the sincere worshipper) who is not (startled into) letting go his ladle and (cup of) sacrificial spirits.",
    lines: {
      1: "The first line, undivided, shows its subject, when the movement approaches, looking out and around with apprehension, and afterwards smiling and talking cheerfully. There will be good fortune.",
      2: "The second line, divided, shows its subject, when the movement approaches, in a position of peril. He judges it better to let go the articles (in his possession), and to ascend a very lofty height. There is no occasion for him to pursue after (the things he has let go); in seven days he will find them.",
      3: "The third line, divided, shows its subject distraught amid the startling movements going on. If those movements excite him to (right) action, there will be no mistake.",
      4: "The fourth line, undivided, shows its subject, amid the startling movements, supinely sinking (deeper) in the mud.",
      5: "The fifth line, divided, shows its subject going and coming amidst the startling movements (of the time), and always in peril ; but perhaps he will not incur loss, and find business (which he can accomplish).",
      6: "The topmost line, divided, shows its subject, amidst the startling movements (of the time), in breathless dismay and looking round him with trembling apprehension. If he take action, there will be evil. If, while the startling movements have not reached his own person and his neighbourhood, (he were to take precautions), there would be no error, though his relatives might (still) speak against him."
    }
  },{
    title: "Keeping Still, Mountain",
    hexNumber: 52,
    unicodeCharacter: "䷳",
    interpretation: "When one's resting is like that of the back, and he loses all consciousness of self; when he walks in his courtyard, and does not see any (of the persons) in it, there will be no error.",
    lines: {
      1: "The first line, divided, shows its subject keeping his toes at rest. There will be no error; but it will be advantageous for him to be persistently firm and correct.",
      2: "The second line, divided, shows its subject keeping the calves of his legs at rest. He cannot help (the subject of the line above) whom he follows, and is dissatisfied in his mind.",
      3: "The third line, undivided, shows its subject keeping his loins at rest, and separating the ribs (from the body below). The situation is perilous, and the heart glows with suppressed excitement.",
      4: "The fourth line, divided, shows its subject keeping his trunk at rest. There will be no error.",
      5: "The fifth line, divided, shows its subject keeping his jawbones at rest, so that his words are (all) orderly. Occasion for repentance will disappear.",
      6: "The sixth line, undivided, shows its subject devotedly maintaining his restfulness. There will be good fortune."
    }
  },{
    title: "Development",
    hexNumber: 53,
    unicodeCharacter: "䷴",
    interpretation: "'Development' suggests to us the marriage of a young lady, and the good fortune (attending it). There will be advantage in being firm and correct.",
    lines: {
      1: "The first line, divided, shows the wild geese gradually approaching the shore. A young officer (in similar circumstances) will be in a position of danger, and be spoken against ; but there will be no error.",
      2: "The second line, divided, shows the geese gradually approaching the large rocks, where they eat and drink joyfully and at ease. There will be good fortune.",
      3: "The third line, undivided, shows them gradually advanced to the dry plains. (It suggests also the idea of) a husband who goes on an expedition from which he does not return, and of a wife who is pregnant, but will not nourish her child. There will be evil. (The case symbolised) might be advantageous in resisting plunderers.",
      4: "The fourth line, divided, shows the geese gradually advanced to the trees. They may light on the flat branches. There will be no error.",
      5: "The fifth line, undivided, shows the geese gradually advanced to the high mound. (It suggests the idea of) a wife who for three years does not become pregnant ; but in the end the natural issue cannot be prevented. There will be good fortune.",
      6: "The sixth line, undivided, shows the geese gradually advanced to the large heights (beyond). Their feathers can be used as ornaments. There will be good fortune."
    }
  },{
    title: "The Marrying Maiden",
    hexNumber: 54,
    unicodeCharacter: "䷵",
    interpretation: "'The Marrying Maiden' indicates that (under the conditions which it denotes) action will be evil, and in no wise advantageous.",
    lines: {
      1: "The first line, undivided, shows the younger sister married off in a position ancillary to the real wife. (It suggests the idea of) a person lame on one leg who yet manages to tramp along. Going forward will be fortunate.",
      2: "The second line, undivided, shows her blind of one eye, and yet able to see. There will be advantage in her maintaining the firm correctness of a solitary widow.",
      3: "The third line, divided, shows the younger sister who was to be married off in a mean position. She returns and accepts an ancillary position.",
      4: "The fourth line, undivided, shows the younger sister who is to be married off protracting the time. She may be late in being married, but the time will come.",
      5: "The fifth line, divided, reminds us of the marrying of the younger sister of (king) Tl-yl, when the sleeves of her the princess were not equal to those of the (still) younger sister who accompanied her in an inferior capacity. (The case suggests the thought of) the moon almost full. There will be good fortune.",
      6: "The sixth line, divided, shows the young lady bearing the basket, but without anything in it, and the gentleman slaughtering the sheep, but without blood flowing from it. There will be no advantage in any way."
    }
  },{
    title: "Abundance",
    hexNumber: 55,
    unicodeCharacter: "䷶",
    interpretation: "'Abundance' intimates progress and development When a king has reached the point (which the name denotes) there is no occasion to be anxious (through fear of a change). Let him be as the sun at noon.",
    lines: {
      1: "The first line, undivided, shows its subject meeting with his mate. Though they are both of the same character, there will be no error. Advance will call forth approval.",
      2: "The second line, divided, shows its subject surrounded by screens so large and thick that at midday he can see from them the constellation of the Bushel. If he go (and try to enlighten his ruler who is thus emblemed), he will make himself to be viewed with suspicion and dislike. Let him cherish his feeling of sincere devotion that he may thereby move (his ruler's mind), and there will be good fortune.",
      3: "The third line, undivided, shows its subject with an (additional) screen of a large and thick banner, through which at midday he can see (the small) Mei star. (In the darkness) he breaks his right arm ; but there will be no error.",
      4: "The fourth line, undivided, shows its subject in a tent so large and thick that at midday he can see from it the constellation of the Bushel. But he meets with the subject of the (first) line, undivided like himself. There will be good fortune.",
      5: "The fifth line, divided, shows its subject bringing around him the men of brilliant ability. There will be occasion for congratulation and praise. There will be good fortune.",
      6: "The topmost line, divided, shows its subject with his house made large, but only serving as a screen to his household. When he looks at his door, it is still, and there is nobody about it. For three years no one is to be seen. There will be evil."
    }
  },{
    title: "The Wanderer",
    hexNumber: 56,
    unicodeCharacter: "䷷",
    interpretation: "'The Wanderer' intimates that (in the condition which it denotes) there may be some little attainment and progress. If the stranger or traveller be firm and correct as he ought to be, there will be good fortune.",
    lines: {
      1: "The first line, divided, shows the stranger mean and meanly occupied. It is thus that he brings on himself (further) calamity.",
      2: "The second line, divided, shows the stranger, occupying his lodging-house, carrying with him his means of livelihood, and provided with good and trusty servants.",
      3: "The third line, undivided, shows the stranger, burning his lodging-house, and having lost his servants. However firm and correct he (try to) be, he will be in peril.",
      4: "The fourth line, undivided, shows the traveller in a resting-place, having (also) the means of livelihood and the axe, (but still saying), 'I am not at ease in my mind'",
      5: "The fifth line, divided, shows its subject shooting a pheasant. He will lose his arrow, but in the end he will obtain praise and a (high) charge.",
      6: "The sixth line, undivided, suggests the idea of a bird burning its nest. The stranger, (thus represented), first laughs and then cries out. He has lost his ox(-like docility) too readily and easily. There will be evil."
    }
  },{
    title: "The Gentle Wind",
    hexNumber: 57,
    unicodeCharacter: "䷸",
    interpretation: "'The Gentle Wind' intimates that (under the conditions which it denotes) there will be some little attainment and progress. There will be advantage in movement onward in whatever direction. It will be advantageous (also) to see the great man.",
    lines: {
      1: "The first line, divided, shows its subject (now) advancing, (now) receding. It would be advantageous for him to have the firm correctness of a brave soldier.",
      2: "The second line, undivided, shows the representative of Sun beneath a couch, and employing diviners and exorcists in a way bordering on confusion. There will be good fortune and no error.",
      3: "The third line, undivided, shows its subject penetrating (only) by violent and repeated efforts. There will be occasion for regret.",
      4: "The fourth line, divided, shows all occasion for repentance (in its subject) passed away. He takes game for its threefold use in his hunting.",
      5: "The fifth line, undivided, shows that with firm correctness there will be good fortune (to its subject). All occasion for repentance will disappear, and all his movements will be advantageous. There may have been no (good) beginning, but there will be a (good) end. Three days before making any changes, (let him give notice of them); and three days after, (let him reconsider them). There will (thus) be good fortune.",
      6: "The sixth line, undivided, shows the representative of penetration beneath a couch, and having lost the axe with which he executed his decisions. However firm and correct he may (try to) be, there will be evil."
    }
  },{
    title: "The Joyous Lake",
    hexNumber: 58,
    unicodeCharacter: "䷹",
    interpretation: "'The Joyous Lake' intimates that (under its conditions) there will be progress and attainment. (But) it will be advantageous to be firm and correct.",
    lines: {
      1: "The first line, undivided, shows the pleasure of (inward) harmony. There will be good fortune.",
      2: "The second line, undivided, shows the pleasure arising from (inward) sincerity. There will be good fortune. Occasion for repentance will disappear.",
      3: "The third line, divided, shows its subject bringing round himself whatever can give pleasure. There will be evil.",
      4: "The fourth line, undivided, shows its subject deliberating about what to seek his pleasure in, and not at rest. He borders on what would be injurious, but there will be cause for joy.",
      5: "The fifth line, undivided, shows its subject trusting in one who would injure him. The situation is perilous.",
      6: "The topmost line, divided, shows the pleasure of its subject in leading and attracting others."
    }
  },{
    title: "Dispersion",
    hexNumber: 59,
    unicodeCharacter: "䷺",
    interpretation: "'Dispersion' intimates that (under its conditions) there will be progress and success. The king goes to his ancestral temple; and it will be advantageous to cross the great stream. It will be advantageous to be firm and correct.",
    lines: {
      1: "The first line, divided, shows its subject engaged in rescuing (from the impending evil) and having (the assistance of) a strong horse. There will be good fortune.",
      2: "The second line, undivided, shows its subject, amid the dispersion, hurrying to his contrivance (for security). All occasion for repentance will disappear.",
      3: "The third line, divided, shows its subject discarding any regard to his own person. There will be no occasion for repentance.",
      4: "The fourth line, divided, shows its subject scattering the (different) parties (in the state); which leads to great good fortune. From the dispersion (he collects again good men standing out, a crowd) like a mound, which is what ordinary men would not have thought of.",
      5: "The fifth line, undivided, shows its subject amidst the dispersion issuing his great announcements as the perspiration (flows from his body). He scatters abroad (also) the accumulations in the royal granaries. There will be no error.",
      6: "The topmost line, undivided, shows its subject disposing of (what may be called) its bloody wounds, and going and separating himself from its anxious fears. There will be no error."
    }
  },{
    title: "Limitation",
    hexNumber: 60,
    unicodeCharacter: "䷻",
    interpretation: "'Limitation' intimates that (under its conditions) there will be progress and attainment. (But) if the regulations (which it prescribes) be severe and difficult, they cannot be permanent.",
    lines: {
      1: "The first line, undivided, shows its subject not quitting the courtyard outside his door. There will be no error.",
      2: "The second line, undivided, shows its subject not quitting the courtyard inside his gate. There will be evil.",
      3: "The third line, divided, shows its subject with no appearance of observing the (proper) regulations, in which case we shall see him lamenting. But there will be no one to blame (but himself).",
      4: "The fourth line, divided, shows its subject quietly and naturally (attentive to all) regulations. There* will be progress and success.",
      5: "The fifth line, undivided, shows its subject sweetly and acceptably enacting his regulations. There will be good fortune. The onward progress with them will afford ground for admiration.",
      6: "The topmost line, divided, shows its subject enacting regulations severe and difficult. Even with firmness and correctness there will be evil. But though there will be cause for repentance, it will (by and by) disappear."
    }
  },{
    title: "Inner Truth",
    hexNumber: 61,
    unicodeCharacter: "䷼",
    interpretation: "'Inner Truth' (moves even) pigs and fish, and leads to good fortune. There will be advantage in crossing the great stream. There will be advantage in being firm and correct. ",
    lines: {
      1: "The first line, undivided, shows its subject resting (in himself). There will be good fortune. If he sought to any other, he would not find rest.",
      2: "The second line, undivided, shows its subject (like) the crane crying out in her hidden retirement, and her young ones responding to her. (It is as if it were said), 'I have a cup of good spirits/ (and the response were),' I will partake of it with you/",
      3: "The third line, divided, shows its subject having met with his mate. Now he beats his drum, and now he leaves off. Now he weeps, and now he sings.",
      4: "The fourth line, divided, shows its subject (like) the moon nearly full, and (like) a horse (in a chariot) whose fellow disappears. There will be no error.",
      5: "The fifth line, undivided, shows its subject perfectly sincere, and linking (others) to him in closest union. There will be no error.",
      6: "The topmost line, undivided, shows its subject in chanticleer (trying to) mount to heaven. Even with firm correctness there will be evil."
    }
  },{
    title: "Preponderance of the Small",
    hexNumber: 62,
    unicodeCharacter: "䷽",
    interpretation: "HsiSo Kwo indicates that (in the circumstances which it implies) there will be progress and attainment. But it will be advantageous to be firm and correct. (What the name denotes) may be done in small affairs, but not in great affairs. (It is like) the notes that come down from a bird on the wing; to descend is better than to ascend. There will (in this way) be great good fortune.",
    lines: {
      1: "The first line, divided, suggests (the idea of) a bird flying, (and ascending) till the issue is evil.",
      2: "The second line, divided, shows its subject passing by his grandfather, and meeting with his grandmother; not attempting anything against his ruler, but meeting him as his minister. There will be no error.",
      3: "The third line, undivided, shows its subject taking no extraordinary precautions against danger; and some in consequence finding opportunity to assail and injure him. There will be evil.",
      4: "The fourth line, undivided, shows its subject falling into no error, but meeting (the exigency of his situation), without exceeding (in his natural course). If he go forward, there will be peril, and he must be cautious. There is no occasion to be using firmness perpetually.",
      5: "The fifth line, divided, (suggests the idea) of dense clouds, but no rain, coming from our borders in the west. It also (shows) the prince shooting his arrow, and taking the bird in a cave.",
      6: "The sixth line, divided, shows its subject not meeting (the exigency of his situation), and exceeding (his proper course). (It suggests the idea of) a bird flying far aloft. There will be evil. The case is what is called one of calamity and selfproduced injury."
    }
  },{
    title: "After Completion",
    hexNumber: 63,
    unicodeCharacter: "䷾",
    interpretation: "'After Completion' intimates progress and success in small matters. There will be advantage in being firm and correct. There has been good fortune in the beginning; there may be disorder in the end.",
    lines: {
      1: "The first line, undivided, (shows its subject as a driver) who drags back his wheel, (or as a fox) which has wet his tail. There will be no error.",
      2: "The second line, divided, (shows its subject as) a wife who has lost her (carriage-)screen. There is no occasion to go in pursuit of it. In seven days she will find it.",
      3: "The third line, undivided, (suggests the case of) Kao 3ung who attacked the Demon region, but was three years in subduing it. Small men should not be employed (in such enterprises).",
      4: "The fourth line, divided, shows its subject with rags provided against any leak (in his boat), and on his guard all day long.",
      5: "The fifth line, undivided, shows its subject (as) the neighbour in the east who slaughters an ox (for his sacrifice) ; but this is not equal to the (small) spring sacrifice of the neighbour in the west, whose sincerity receives the blessing.",
      6: "The topmost line, divided, shows its subject with (even) his head immersed. The position is perilous."
    }
  },{
    title: "Before Completion",
    hexNumber: 64,
    unicodeCharacter: "䷿",
    interpretation: "Wei 3t intimates progress and success (in the circumstances which it implies). (We see) a young fox that has nearly crossed (the stream), when its tail gets immersed. There will be no advantage in any way.",
    lines: {
      1: "The first line, divided, shows its subject (like a fox) whose tail gets immersed. There will be occasion for regret.",
      2: "The second line, undivided, shows its subject dragging back his (carriage-)wheel. With firmness and correctness there will be good fortune.",
      3: "The third line, divided, shows its subject, with (the state of things) not yet remedied, advancing on; which will lead to evil. But there will be advantage in (trying to) cross the great stream.",
      4: "The fourth line, undivided, shows its subject by firm correctness obtaining good fortune, so that all occasion for repentance disappears. Let him stir himself up, as if he were invading the Demon region, where for three years rewards will come to him (and his troops) from the great kingdom.",
      5: "The fifth line, divided, shows its subject by firm correctness obtaining good fortune, and having no occasion for repentance. (We see in him) the brightness of a superior man, and the possession of sincerity. There will be good fortune.",
      6: "The topmost line, undivided, shows its subject full of confidence and therefore feasting (quietly). There will be no error. (If he) cherish this confidence, till he (is like the fox who) gets his head immersed, it will fail of what is right."
    }
  }
]

hexagramData.forEach((hexObj)=>{
  var hexagram = new Hexagram(hexObj);

  hexagram.save((err, doc)=>{
    console.log(err);
  });
});
