import React, { Component } from 'react'
import NewsItem from '../NewsItem';


// You are using classbased that is too old. and now a days every class based component is getiing converted to functional based
// so even in interview no one ask about class component  i know but harry uses this and created news by API
// if you anyway can convert it to functional based it will be awesome. you will learn lot of things
// you already make functional component. how to pass props.you just don't know about useeffect which will be used to fetch the api
// and usestate will be used for storing that data came from api  

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "ETAuto Desk, ET Auto",
            "title": "Hero MotoCorp May 2023 sales up 7% to 519,474 units - ETAuto",
            "description": "The momentum is expected to continue in the coming months, driven by an uptick in customer sentiments, forecast of normal monsoon and a host of new launches in the premium segment, the company said.",
            "url": "https://auto.economictimes.indiatimes.com/news/two-wheelers/hero-motocorp-may-2023-sales-up-7-to-519474-units/100690546",
            "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-100690546,imgsize-241240,width-1200,height=765,overlay-etauto/two-wheelers/hero-motocorp-may-2023-sales-up-7-to-519474-units.jpg",
            "publishedAt": "2023-06-02T02:06:26Z",
            "content": "The momentum is expected to continue in the coming months, driven by an uptick in customer sentiments, forecast of normal monsoon and a host of new launches in the premium segment.\r\nNew Delhi: Hero M… [+1107 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Rishi Sunak Refuses To Hand Over WhatsApp Texts To UK's Covid Inquiry - NDTV",
            "description": "Rishi Sunak's administration refused a demand from the UK's Covid-19 inquiry to hand over former Prime Minister Boris Johnson's WhatsApp messages and pandemic diaries.",
            "url": "https://www.ndtv.com/world-news/rishi-sunak-refuses-to-hand-over-whatsapp-texts-to-uks-covid-inquiry-4087196",
            "urlToImage": "https://c.ndtvimg.com/2022-10/kag761g8_boris-johnson-rishi-sunak_625x300_21_October_22.jpg",
            "publishedAt": "2023-06-02T01:57:34Z",
            "content": "Rishi Sunak's administration refused a demand from the UK's Covid-19 inquiry to hand over former Prime Minister Boris Johnson's WhatsApp messages and pandemic diaries, setting up a legal battle that … [+3233 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Reuters",
            "title": "Meta unveils Quest 3 mixed reality headset ahead of Apple's VR debut - Moneycontrol",
            "description": "Priced starting at $499, the device will be 40% thinner than the company's previous headset and feature color mixed reality, which combines augmented and virtual reality (AR/VR) elements, Zuckerberg said in an Instagram post ahead of Meta's annual gaming conf…",
            "url": "https://www.moneycontrol.com/news/world/meta-unveils-quest-3-mixed-reality-headset-ahead-of-apples-vr-debut-10729301.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/03/Collage-Maker-22-Mar-2023-02-31-PM-6671-770x433.jpg",
            "publishedAt": "2023-06-02T01:43:58Z",
            "content": "Meta Platforms CEO Mark Zuckerberg on Thursday revealed the company's next generation mixed reality headset, the Quest 3, as the company braces for Apple to potentially reshape a nascent market that … [+4160 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Moneycontrol"
            },
            "author": "Shivam Shukla",
            "title": "Stock Market Today: Top 10 things to know before the market opens - Moneycontrol",
            "description": "Foreign institutional investors (FIIs) sold shares worth Rs 71.07 crore, whereas domestic institutional investors (DIIs) bought shares worth Rs 488.93 crore on June 1, provisional data from the National Stock Exchange shows.",
            "url": "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-58-10718341.html",
            "urlToImage": "https://images.moneycontrol.com/static-mcnews/2023/01/Markets8-770x433.jpg",
            "publishedAt": "2023-06-02T01:35:02Z",
            "content": "The market is likely to open marginally higher on June 2 as the SGX Nifty indicates a positive start for the broader index, with a gain of 70.5 points after opening the session at 18,622. SGX futures… [+6432 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Madhya Pradesh Orders Probe After Schoolgirls Allegedly Made To Wear Hijab - NDTV",
            "description": "A private school in Madhya Pradesh's Damoh district released a poster of its board exam toppers in which some girls, who are not Muslims, are seen wearing scarves.",
            "url": "https://www.ndtv.com/india-news/madhya-pradesh-orders-probe-after-schoolgirls-allegedly-made-to-wear-hijab-4087168",
            "urlToImage": "https://i.ndtvimg.com/i/2016-12/hijab-generic_650x400_71482050917.jpg",
            "publishedAt": "2023-06-02T01:02:51Z",
            "content": "\"The school dress code for girl students comprises scarves, salwar and kurta.\" (Representational)\r\nA private school in Madhya Pradesh's Damoh district released a poster of its board exam toppers in w… [+1881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Poulomi Ghosh",
            "title": "Rahul Gandhi says ‘Muslim League secular’; 'Compulsion for Wayanad,' slams BJP - Hindustan Times",
            "description": "As Malviya called Rahul Gandhi ‘poorly read, sinister and disingenuous’ for his Muslim League comment, Pawan Khera said, ‘Unpadh ho bhai?’ | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/rahul-gandhi-says-muslim-league-secular-compulsion-for-wayanad-slams-bjp-101685664306002.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/02/1600x900/Rahul_Gandhi_Muslim_League_1685664376914_1685664387015.JPG",
            "publishedAt": "2023-06-02T00:10:21Z",
            "content": "On a question on the Congress' alliance with the Muslim League in Kerala, Rahul Gandhi during his interaction at the National Press Club in Washington DC said there was nothing non-secular about Musl… [+2387 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Cricket Council"
            },
            "author": "Jonathan Healy in London",
            "title": "India bowling line-up for WTC Final still a mystery for Australia - ICC Cricket",
            "description": "Australia are preparing to face star all-rounder Ravindra Jadeja in the ICC World Test Championship Final, but remain unsure whether veteran spinner Ravichandran Ashwin will join him in India's XI.",
            "url": "https://www.icc-cricket.com/news/3527124",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2023/06/01/ce36f522-e88d-4384-b7ce-1e2dea1165bf/Shami-and-Umesh.jpg",
            "publishedAt": "2023-06-01T23:45:03Z",
            "content": "Australia are preparing to face star all-rounder Ravindra Jadeja in the ICC World Test Championship Final, but remain unsure whether veteran spinner Ravichandran Ashwin will join him in India's XI.Wh… [+2425 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Samir Jain",
            "title": "Horoscope Today, June 2, 2023: Read your daily astrological predictions - Times of India",
            "description": "Horoscope(Old) News: Read daily horoscope predictions for June 2, 2023: Know all about the astrological events and influences that will be affecting each of the 12 zodiac",
            "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-june-2-2023-read-your-daily-astrological-predictions/articleshow/100613518.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-100613662,width-1070,height-580,imgsize-8526,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2023-06-01T23:30:00Z",
            "content": "Read Your Weekly Horoscope: May 28, 2023 to June 3, 2023"
        },
        {
            "source": {
                "id": null,
                "name": "Healthimaging.com"
            },
            "author": null,
            "title": "Incomplete neurovascular imaging work-ups to blame for subsequent stroke in patients with TIA - Health Imaging",
            "description": "Up to 37% of patients presenting with transient ischemic attack do not receive a full neurovascular imaging work-up, according to new data published in the American Journal of Roentgenology.",
            "url": "https://healthimaging.com/topics/medical-imaging/neuroimaging/stroke-patients-tia",
            "urlToImage": "https://healthimaging.com/sites/default/files/styles/facebook/public/2020-07/stroke-3233778_1920.jpg?h=13374b10&itok=PnDL7zLk",
            "publishedAt": "2023-06-01T20:53:45Z",
            "content": "Patients presenting to emergency departments with symptoms of transient ischemic attack (TIA) who do not undergo a full neurovascular imaging work-up are at an increased risk of suffering a stroke in… [+2013 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Crictoday.com"
            },
            "author": "Venkat Narayanan",
            "title": "Axar Patel discloses smart move by Indian players to defeat Australia in WTC Final - Crictoday.com (Cricket News) ",
            "description": "Axar Patel revealed that Indian players practiced with the red dukes ball during the Indian Premier League (IPL) 2023",
            "url": "http://crictoday.com/cricket/news/axar-patel-discloses-smart-move-by-indian-players-to-defeat-australia-in-wtc-final/",
            "urlToImage": "https://crictoday.com/wp-content/uploads/2023/06/de94b4de-axar-wasim-1024x576-1.webp",
            "publishedAt": "2023-06-01T19:42:34Z",
            "content": "Axar Patel revealed that Indian players practiced with the red dukes ball during the Indian Premier League (IPL) 2023 in preparation for the World Test Championship (WTC) Final. The WTC Final will se… [+938 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Sagar Malviya",
            "title": "Consumer goods companies score big green goals - Economic Times",
            "description": "The maker of Surf and Dove decarbonised operations with 97% reduction in CO2 emissions per ton of production against the 2008 baseline. It has been plastic neutral since 2021. About 95% of its paper and board in packaging, 82% of tomatoes and 69% of tea came …",
            "url": "https://economictimes.indiatimes.com/news/company/corporate-trends/consumer-goods-companies-score-big-green-goals/articleshow/100686379.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-100686404,width-1070,height-580,imgsize-44856,overlay-economictimes/photo.jpg",
            "publishedAt": "2023-06-01T18:47:00Z",
            "content": "When Sanjiv Mehta joined Hindustan Unilever as its managing director in 2013, he said he had 'opted' for an India stint as Unilever's corporate purpose was in sync with his own. A decade later, on th… [+5507 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Universe Today"
            },
            "author": "Carolyn Collins Petersen",
            "title": "You Can Detect Tsunamis as They Push the Atmosphere Around - Universe Today",
            "description": "Tectonic events cause tsunamis that can affect the atmosphere and distort GPS signals. Those distortions may help predict tsunamis.",
            "url": "https://www.universetoday.com/161742/you-can-detect-tsunamis-as-they-push-the-atmosphere-around/",
            "urlToImage": "https://www.universetoday.com/wp-content/uploads/2022/01/tonga-hunga-explosion.jpg",
            "publishedAt": "2023-06-01T18:38:38Z",
            "content": "Anyone who’s ever lived along a coastline or been at sea knows the effects of tsunamis. And, they appreciate all the early warning they can get if one’s on the way. Now, NASA’s GNSS Upper Atmospheric… [+5600 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "TIMESOFINDIA.COM",
            "title": "Low sexual satisfaction in middle age men linked to memory decline in future, study finds - Indiatimes.com",
            "description": "Low sexual satisfaction in middle-aged men may be a predictor of future memory decline, according to a study conducted by Penn State researchers.",
            "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/low-sexual-satisfaction-in-middle-age-men-linked-to-memory-decline-in-future-study-finds/photostory/100678848.cms",
            "urlToImage": "https://static.toiimg.com/photo/100678866.cms",
            "publishedAt": "2023-06-01T18:30:00Z",
            "content": "Researchers also stressed on the importance of sexual satisfaction, and its physical and mental impact on our health.\r\nRiki Slayday, a doctoral candidate at Penn State and lead author on the study, s… [+432 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "Apple WWDC 2023: Headset rumors, iOS 17 and everything else to expect - TechCrunch",
            "description": "Apple WWDC 2023 is next week – here’s what we expect. Yes, the headset – some iOS, MacOS and watchOS announcements, too",
            "url": "https://techcrunch.com/2023/06/01/apple-wwdc-2023-is-next-week-heres-what-we-expect/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/05/CMC_6520.jpg?resize=1200,772",
            "publishedAt": "2023-06-01T18:14:07Z",
            "content": "Look. Were all interested in one. I know it, you know it, Apple certainly knows it. Much as AI was Googles primary focus at I/O and I dont know — Windows 11, I guess — was Microsofts centerpiece at B… [+6611 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Sanskriti Falor",
            "title": "Watch: How Indian Coast Guard seized ₹20 cr worth gold smuggled from Sri Lanka - Hindustan Times",
            "description": "The operation was jointly carried out by the Indian Coast Guard and Directorate of Revenue Intelligence on Thursday. | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/watch-how-indian-coast-guard-seized-20-crore-worth-gold-smuggled-from-sri-lanka-101685637372047.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/01/1600x900/FxiP4q8acAE90X4_1685641256176_1685641272399.png",
            "publishedAt": "2023-06-01T17:39:37Z",
            "content": "The Indian Coast Guard and Directorate of Revenue Intelligence carried out a joint operation on Thursday which led to the seizure of 32.6 kg of gold worth around 20.2 crore from two fishing boats in … [+1517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Rezaul H Laskar",
            "title": "At Brics meet, Jaishankar asks grouping to act as symbol of change - Hindustan Times",
            "description": "External affairs minister S Jaishankar said Brics must send out a strong message that the world is multipolar, is rebalancing and “that old ways cannot address new situations” | Latest News India",
            "url": "https://www.hindustantimes.com/india-news/brics-must-act-as-a-symbol-of-change-during-covid-19-fallout-stresses-from-conflict-and-terrorism-says-jaishankar-101685639820549.html",
            "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/06/01/1600x900/India-s-foreign-minister-S-Jaishankar--South-Afric_1685639810901.jpg",
            "publishedAt": "2023-06-01T17:17:00Z",
            "content": "NEW DELHI: The Brics (Brazil, Russia, India, China and South Africa) grouping must act as a symbol of change at a time when the world community is grappling with the fallout of the Covid-19 pandemic … [+3881 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Press Trust of India",
            "title": "Between Ishan Kishan And KS Bharat, Matthew Hayden Goes For 'More Dynamic' Option At WTC Final - NDTV Sports",
            "description": "The absence of the dashing Rishabh Pant, who is recovering from injuries sustained in a car accident in December, leaves a big void in India's Test eleven, said Matthew Hayden",
            "url": "https://sports.ndtv.com/cricket/between-ishan-kishan-and-ks-bharat-matthew-hayden-goes-for-more-dynamic-option-at-wtc-final-4086277",
            "urlToImage": "https://c.ndtvimg.com/2023-04/3upa7n4o_matthew-hayden_640x480_22_April_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2023-06-01T16:12:50Z",
            "content": "The absence of the dashing Rishabh Pant, who is recovering from injuries sustained in a car accident in December, leaves a big void in India's Test eleven, said Matthew Hayden, who is backing Ishan K… [+1643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Fresh from their IPL 2023 heroics, Ravindra Jadeja and Shubman Gill join India’s WTC Final squad - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/sports/cricket/fresh-from-their-ipl-2023-heroics-ravindra-jadeja-and-shubman-gill-join-indias-wtc-final-squad-8641238/",
            "urlToImage": null,
            "publishedAt": "2023-06-01T15:24:07Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "The Indian Express"
            },
            "author": "The Indian Express",
            "title": "Consider wrestlers’ complaint, says MP Pritam Munde as sister Pankaja says BJP doesn’t belong to her - The Indian Express",
            "description": null,
            "url": "https://indianexpress.com/article/cities/mumbai/wrestlers-complaint-mp-pritam-munde-sister-pankaja-bjp-doesnt-belong-her-8641271/",
            "urlToImage": null,
            "publishedAt": "2023-06-01T15:13:13Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "Ritvick Arun Bhalekar",
            "title": "Sharad Pawar meets Eknath Shinde, BJP says 'personal meeting' - India Today",
            "description": "Tweeting about the meeting, Sharad Pawar said he went to invite the chief minister to the 75th anniversary celebration of Maratha Mandir, an iconic cinema hall in south Mumbai.",
            "url": "https://www.indiatoday.in/india/story/personal-meeting-bjp-leader-on-eknath-shinde-sharad-pawars-meeting-2387634-2023-06-01",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/Sharad%20Pawar%20Eknath%20Shinde-sixteen_nine.jpg?VersionId=YCriiLNlHyxpinGGSeppcdOriZ3WeEn5",
            "publishedAt": "2023-06-01T15:12:48Z",
            "content": "By Ritvick Arun Bhalekar: Nationalist Congress Party (NCP) chief Sharad Pawar met Maharashtra Chief Minister Eknath Shinde at his official residence in Mumbai on Thursday. Tweeting about the meeting,… [+2447 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello i am a constructer from a news component");
        this.state = {
            articles: this.articles
            // loading : false
        }

    }

    render() {
        return (
            <div className='Container my-3  mx-5'>
                <h1>NewsDay - Top Headlines</h1>

                {this.state.articles.map((element) => {
                    console.log(element, 293)
                })}

                <div className="row">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title.slice(0, 45)} description={element.description ? element.description.slice(0, 79) : ""} imageUrl={element.urlToImage} Newsurl={element.url} />
                            </div>
                        )
                    })}

                    {/* <div className="col-md-4">
                        <NewsItem tittle="my-Tittle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <NewsItem tittle="my-Tittle" description="mydesc" />
                    </div> */}
                </div>
            </div >
        )
    }
}

export default News;
