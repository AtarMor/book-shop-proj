
import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'



export const googleBookService = {
    query
}

function query(txt) {
    const books = googleDemoData.items.filter(book =>
        book.volumeInfo.title.includes(txt))
    return books.map(book => {
        const bookInfo = book.volumeInfo
        return {
            id: book.id,
            title: bookInfo.title || '',
            subtitle: book.searchInfo.textSnippet,
            authors: bookInfo.authors,
            publishedDate: bookInfo.publishedDate,
            description: bookInfo.description,
            pageCount: bookInfo.pageCount,
            categories: bookInfo.categories,
            thumbnail: bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : '',
            language: bookInfo.language,
            listPrice: {
                amount: utilService.getRandomInt(10, 100),
                currencyCode: 'USD',
                isOnSale: false,
            }
        }
    }
    )
}

const googleDemoData =
{
    "kind": "books#volumes",
    "totalItems": 292,
    "items": [
        {
            "kind": "books#volume",
            "id": "nBuA0hmspdMC",
            "etag": "rB2q/sG3nDE",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "authors": [
                    "David Herman"
                ],
                "publisher": "Addison-Wesley",
                "publishedDate": "2012-11-26",
                "description": "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780132902250"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0132902257"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 231,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "2.13.10.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=nBuA0hmspdMC&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "qBiEjwEACAAJ",
            "etag": "QtqR2m5tCkQ",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/qBiEjwEACAAJ",
            "volumeInfo": {
                "title": "Effective JavaScript",
                "subtitle": "68 Specific Ways to Harness the Power of JavaScript",
                "publishedDate": "2013",
                "description": "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "0132902281"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9780132902281"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 206,
                "printType": "BOOK",
                "categories": [
                    "JavaScript (Computer program language)"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "language": "en",
                "previewLink": "http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=qBiEjwEACAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=qBiEjwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency."
            }
        },
        {
            "kind": "books#volume",
            "id": "PXa2bby0oQ0C",
            "etag": "YsiFOE73k1w",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/PXa2bby0oQ0C",
            "volumeInfo": {
                "title": "JavaScript: The Good Parts",
                "subtitle": "The Good Parts",
                "authors": [
                    "Douglas Crockford"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2008-05-08",
                "description": "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9780596554873"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "0596554877"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 172,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 4.5,
                "ratingsCount": 37,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "0.6.6.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=PXa2bby0oQ0C&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=PXa2bby0oQ0C&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/JavaScript_The_Good_Parts.html?hl=&id=PXa2bby0oQ0C"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=PXa2bby0oQ0C&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "If you develop sites or applications for the Web, this book is an absolute must."
            }
        },
        {
            "kind": "books#volume",
            "id": "wD63DwAAQBAJ",
            "etag": "VBdmke5dH2c",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/wD63DwAAQBAJ",
            "volumeInfo": {
                "title": "Effective TypeScript",
                "subtitle": "62 Specific Ways to Improve Your TypeScript",
                "authors": [
                    "Dan Vanderkam"
                ],
                "publisher": "O'Reilly Media",
                "publishedDate": "2019-10-17",
                "description": "TypeScript is a typed superset of JavaScript with the potential to solve many of the headaches for which JavaScript is famous. But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript. Author Dan Vanderkam, a principal software engineer at Sidewalk Labs, shows you how to apply these ideas, following the format popularized by Effective C++ and Effective Java (both from Addison-Wesley). You’ll advance from a beginning or intermediate user familiar with the basics to an advanced user who knows how to use the language well. Effective TypeScript is divided into eight chapters: Getting to Know TypeScript TypeScript’s Type System Type Inference Type Design Working with any Types Declarations and @types Writing and Running Your Code Migrating to TypeScript",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781492053712"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1492053716"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 264,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.3.1.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=wD63DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=wD63DwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=wD63DwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_TypeScript.html?hl=&id=wD63DwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=wD63DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "But TypeScript has a learning curve of its own, and understanding how to use it effectively can take time. This book guides you through 62 specific ways to improve your use of TypeScript."
            }
        },
        {
            "kind": "books#volume",
            "id": "Iv1wDwAAQBAJ",
            "etag": "o8H2RfTgx9I",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Iv1wDwAAQBAJ",
            "volumeInfo": {
                "title": "Hands-On Design Patterns with React Native",
                "subtitle": "Proven techniques and patterns for efficient native mobile development with JavaScript",
                "authors": [
                    "Mateusz Grzesiukiewicz"
                ],
                "publisher": "Packt Publishing Ltd",
                "publishedDate": "2018-09-29",
                "description": "Learn how to write cross platform React Native code by using effective design patterns in the JavaScript world. Get to know industry standard patterns as well as situational patterns. Decouple your application with these set of “Idea patterns”. Key FeaturesMobile development in React Native should be done in a reusable way. Learn how to build scalable applications using JavaScript patterns that are battle tested.Try effective techniques on your own using over 80 standalone examples.Book Description React Native helps developers reuse code across different mobile platforms like iOS and Android. This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams. The book will focus only on the patterns that are relevant to JavaScript, ECMAScript, React and React Native. However, you can successfully transfer a lot of the skills and techniques to other languages. I call them “Idea patterns”. This book will start with the most standard development patterns in React like component building patterns, styling patterns in React Native and then extend these patterns to your mobile application using real world practical examples. Each chapter comes with full, separate source code of applications that you can build and run on your phone. The book is also diving into architectural patterns. Especially how to adapt MVC to React environment. You will learn Flux architecture and how Redux is implementing it. Each approach will be presented with its pros and cons. You will learn how to work with external data sources using libraries like Redux thunk and Redux Saga. The end goal is the ability to recognize the best solution for a given problem for your next mobile application. What you will learnExplore the design Patterns in React NativeLearn the best practices for React Native developmentExplore common React patterns that are highly used within React Native developmentLearn to decouple components and use dependency injection in your applicationsExplore the best ways of fetching data from the backend systemsLearn the styling patterns and how to implement custom mobile designsExplore the best ways to organize your application code in big codebasesWho this book is for The ideal target audience for this book are people eager to learn React Native design patterns who already know the basics of JavaScript. We can assume that the target audience already knows how to write Hello World in JavaScript and know what are the functions, recursive functions, JavaScript types and loops.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781788999540"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1788999541"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 297,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "0.1.1.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Iv1wDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=Iv1wDwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=Iv1wDwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Hands_On_Design_Patterns_with_React_Nati.html?hl=&id=Iv1wDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=Iv1wDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book will show you effective design patterns in the React Native world and will make you ready for professional development in big teams."
            }
        },
        {
            "kind": "books#volume",
            "id": "Gn1VDgAAQBAJ",
            "etag": "LBn49ZLRWpY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/Gn1VDgAAQBAJ",
            "volumeInfo": {
                "title": "Refactoring JavaScript",
                "subtitle": "Turning Bad Code Into Good Code",
                "authors": [
                    "Evan Burchard"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2017-03-13",
                "description": "How often do you hear people say things like this? \"Our JavaScript is a mess, but we’re thinking about using [framework of the month].\" Like it or not, JavaScript is not going away. No matter what framework or ”compiles-to-js” language or library you use, bugs and performance concerns will always be an issue if the underlying quality of your JavaScript is poor. Rewrites, including porting to the framework of the month, are terribly expensive and unpredictable. The bugs won’t magically go away, and can happily reproduce themselves in a new context. To complicate things further, features will get dropped, at least temporarily. The other popular method of fixing your JS is playing “JavaScript Jenga,” where each developer slowly and carefully takes their best guess at how the out-of-control system can be altered to allow for new features, hoping that this doesn’t bring the whole stack of blocks down. This book provides clear guidance on how best to avoid these pathological approaches to writing JavaScript: Recognize you have a problem with your JavaScript quality. Forgive the code you have now, and the developers who made it. Learn repeatable, memorable, and time-saving refactoring techniques. Apply these techniques as you work, fixing things along the way. Internalize these techniques, and avoid writing as much problematic code to begin with. Bad code doesn’t have to stay that way. And making it better doesn’t have to be intimidating or unreasonably expensive.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781491964897"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1491964898"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 441,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.1.0.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=Gn1VDgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=Gn1VDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=Gn1VDgAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=Gn1VDgAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Refactoring_JavaScript.html?hl=&id=Gn1VDgAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=Gn1VDgAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book provides clear guidance on how best to avoid these pathological approaches to writing JavaScript: Recognize you have a problem with your JavaScript quality. Forgive the code you have now, and the developers who made it."
            }
        },
        {
            "kind": "books#volume",
            "id": "--gvDwAAQBAJ",
            "etag": "L1Zv9KEocAY",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/--gvDwAAQBAJ",
            "volumeInfo": {
                "title": "An Effective Guide to Modern JavaScript",
                "subtitle": "(ECMAScript 2017 / ES 8)",
                "authors": [
                    "Chong Lip Phang"
                ],
                "publisher": "Chong Lip Phang",
                "publishedDate": "2017-08-08",
                "description": "ES8 was finalized in June 2017. This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ES8 and beyond, and illustrates all of them. - clearly explains advanced concepts such as closures, Proxy, generators, Promise, async functions, and Atomics. - covers OOP techniques -- classical JavaScript OOP, the new 'class' syntax, data encapsulation, multiple inheritance, abstract classes, object relay etc. - teaches you how to define and use iterators and various iterables. - turns you into an efficient JavaScript coder.",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781974207923"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1974207927"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 127,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=--gvDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=--gvDwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=--gvDwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/An_Effective_Guide_to_Modern_JavaScript.html?hl=&id=--gvDwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/An_Effective_Guide_to_Modern_JavaScript-sample-pdf.acsm?id=--gvDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=--gvDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "This book: - effectively teaches standard JavaScript from A to Z. - includes all the JavaScript common APIs, presented in a highly organized fashion. - lists in the Appendix the new features introduced in each JavaScript edition from ES5 to ..."
            }
        },
        {
            "kind": "books#volume",
            "id": "O_d5DwAAQBAJ",
            "etag": "FWsBSk4x+M4",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/O_d5DwAAQBAJ",
            "volumeInfo": {
                "title": "Full Stack JavaScript",
                "subtitle": "Learn Backbone.js, Node.js, and MongoDB",
                "authors": [
                    "Azat Mardan"
                ],
                "publisher": "Apress",
                "publishedDate": "2018-11-14",
                "description": "Learn agile JavaScript web development using the latest cutting-edge front-end and back-end technologies including Node.js, MongoDB, Backbone.js, Parse.com, Heroku, and Microsoft Azure. Using a key project example of a message board app, you will learn the foundations of a typical web application: fetching data, displaying it, and submitting new data. Practical examples of the app build are provided with multiple technologies and all code examples are in full color. This book will save you many hours by providing a hand-picked and tested collection of quick start guides that will enable you to spend less time learning and more time building your own applications. Completely updated for this second edition, Full Stack JavaScript uses current versions of all technologies, including ES6/ES2015 and the latest versions of Node and npm. Prototype fast and ship code that matters! What You'll Learn Use a collection of quick start guides, tutorials, and suggestions, to enhance several development appsReview virtually all setup and deployment step-by-step.Work with Chat web/mobile applications Put front-end and back-end components together and deploy them to production environmentWho This Book Is For Programmers who want to learn more about effective JavaScript coding",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781484237182"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1484237188"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": true
                },
                "pageCount": 315,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "0.0.1.0.preview.1",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=O_d5DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=O_d5DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=O_d5DwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=O_d5DwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Full_Stack_JavaScript.html?hl=&id=O_d5DwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": true,
                    "acsTokenLink": "http://books.google.com/books/download/Full_Stack_JavaScript-sample-pdf.acsm?id=O_d5DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
                },
                "webReaderLink": "http://play.google.com/books/reader?id=O_d5DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "Completely updated for this second edition, Full Stack JavaScript uses current versions of all technologies, including ES6/ES2015 and the latest versions of Node and npm. Prototype fast and ship code that matters!"
            }
        },
        {
            "kind": "books#volume",
            "id": "25AEAwAAQBAJ",
            "etag": "xPziVArMAJA",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/25AEAwAAQBAJ",
            "volumeInfo": {
                "title": "You Don't Know JS: Scope & Closures",
                "authors": [
                    "Kyle Simpson"
                ],
                "publisher": "\"O'Reilly Media, Inc.\"",
                "publishedDate": "2014-03-10",
                "description": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset. Like other books in the \"You Don’t Know JS\" series, Scope and Closures dives into trickier parts of the language that many JavaScript programmers simply avoid. Armed with this knowledge, you can achieve true JavaScript mastery. Learn about scope, a set of rules to help JavaScript engines locate variables in your code Go deeper into nested scope, a series of containers for variables and functions Explore function- and block-based scope, “hoisting”, and the patterns and benefits of scope-based hiding Discover how to use closures for synchronous and asynchronous tasks, including the creation of JavaScript libraries",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_13",
                        "identifier": "9781449335540"
                    },
                    {
                        "type": "ISBN_10",
                        "identifier": "1449335543"
                    }
                ],
                "readingModes": {
                    "text": true,
                    "image": true
                },
                "pageCount": 105,
                "printType": "BOOK",
                "categories": [
                    "Computers"
                ],
                "averageRating": 5,
                "ratingsCount": 1,
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": true,
                "contentVersion": "1.7.8.0.preview.3",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "imageLinks": {
                    "smallThumbnail": "http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                    "thumbnail": "http://books.google.com/books/content?id=25AEAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=25AEAwAAQBAJ&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=25AEAwAAQBAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/You_Don_t_Know_JS_Scope_Closures.html?hl=&id=25AEAwAAQBAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "PARTIAL",
                "embeddable": true,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": true
                },
                "pdf": {
                    "isAvailable": true
                },
                "webReaderLink": "http://play.google.com/books/reader?id=25AEAwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "SAMPLE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language."
            }
        },
        {
            "kind": "books#volume",
            "id": "wVDCjwEACAAJ",
            "etag": "SOP1c7rBdxg",
            "selfLink": "https://www.googleapis.com/books/v1/volumes/wVDCjwEACAAJ",
            "volumeInfo": {
                "title": "Effective Javascript",
                "subtitle": "68 Specific Ways to Harness the Power of Javascript",
                "authors": [
                    "David Herman"
                ],
                "publishedDate": "2016-03-08",
                "description": "\"It's uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You'll find when you finish the book that you've gained a strong and comprehensive sense of mastery.\"-Paul Irish, developer advocate, Google Chrome \"This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It's one of the few books on JS that I'll recommend without hesitation.\"-Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language's flexible, expressive features and how to avoid its pitfalls. No matter how long you've been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma's JavaScript standardization committee, illuminates the language's inner workings as never before-helping you take full advantage of JavaScript's expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you'll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You'll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript's functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript's unique \"run-to-completion\" approach to concurrency",
                "industryIdentifiers": [
                    {
                        "type": "ISBN_10",
                        "identifier": "1530427223"
                    },
                    {
                        "type": "ISBN_13",
                        "identifier": "9781530427222"
                    }
                ],
                "readingModes": {
                    "text": false,
                    "image": false
                },
                "pageCount": 228,
                "printType": "BOOK",
                "maturityRating": "NOT_MATURE",
                "allowAnonLogging": false,
                "contentVersion": "preview-1.0.0",
                "panelizationSummary": {
                    "containsEpubBubbles": false,
                    "containsImageBubbles": false
                },
                "language": "en",
                "previewLink": "http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
                "infoLink": "http://books.google.com/books?id=wVDCjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
                "canonicalVolumeLink": "https://books.google.com/books/about/Effective_Javascript.html?hl=&id=wVDCjwEACAAJ"
            },
            "saleInfo": {
                "country": "IL",
                "saleability": "NOT_FOR_SALE",
                "isEbook": false
            },
            "accessInfo": {
                "country": "IL",
                "viewability": "NO_PAGES",
                "embeddable": false,
                "publicDomain": false,
                "textToSpeechPermission": "ALLOWED",
                "epub": {
                    "isAvailable": false
                },
                "pdf": {
                    "isAvailable": false
                },
                "webReaderLink": "http://play.google.com/books/reader?id=wVDCjwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
                "accessViewStatus": "NONE",
                "quoteSharingAllowed": false
            },
            "searchInfo": {
                "textSnippet": "&quot;-Paul Irish, developer advocate, Google Chrome &quot;This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It&#39;s one of the few books on JS that I&#39;ll recommend without hesitation."
            }
        }
    ]
}