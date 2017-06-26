var XMLposts = {}

// Our React components.
// Hierarchical order starting with the smallest component.

var BlogPost = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});

var replacer = (match) => {
    console.log("Replaced: " + match)
    if (match.includes('/')) { return '</h4>' }
    else { return '<h4> ' }
}

var Blog = React.createClass({
    getInitialState: function () {
        return {
            posts: "",
            user: ""
        };
    },
    // The request from Medium is made server-side, then the client requests from the server (CORS error forced this wonky solution)
    componentDidMount: function () {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/xml")
        xhr.open('get', this.props.url, true);

        xhr.onload = function () {
            let parser = new DOMParser();
<<<<<<< HEAD
            let posts = xhr.response;
            posts = parser.parseFromString(posts, "application/xml");
            this.setState({ posts: posts.firstChild.firstChild.children[9].children[11] });
            // stories: .firstchild.firstchild.childnodes 9-15
            // specific encoded: .posts.firstChild.firstChild.children[9].children[11]
        }.bind(this);
        xhr.send();
    },

    // test this on medium stories
    formatter: function () {
        var XML = "<thisXML>is annoying as fuck</thisXML>"
        var newHTML = ""

        // collect all tags,
        var regEx = /<.+?>/g;
        var regExProps = []
        var matches = []

        // iterate through the string for each attrName and collect open and close
        while ((regExProps = regEx.exec(XML)) !== null) {
            var msg = 'Found ' + regExProps[0] + '. ';
            msg += 'This match ends at ' + regEx.lastIndex + 'and is' + regExProps.length + 'characters long.';
            console.log("Message: " + msg);
        }
        // convert all tags,
        XML = XML.replace(regEx, replacer)
        console.log("Final: " + XML)

        var openTagToReplace = XML.substring(XML.indexOf("<"), XML.indexOf(">") + 1)
        var closeTagToReplace = openTagToReplace.replace("<", "</")
        // thisXML
        var attrNameToReplace = XML.substr(1, openTagToReplace.length - 2)
    },

    output: function () {
        for (var post in this.state.posts) {
            return <span> {post} </span>
=======
            XMLposts = xhr.response;
            XMLposts = parser.parseFromString(XMLposts, "application/xml");
            // State is set to the XMLDocument Object our request returned.
            this.setState({ posts: XMLposts });
            if (this.state.posts !== XMLposts) {
                console.log("Set state unsuccessful.")
            }
        }.bind(this);
        xhr.send();
    },
    // TODO: Iterator is only collecting first blog.
    // Our iterator collects the appropriate text from the XMLDocument object and encodes it into HTML with dangerouslySetInnerHTML. (:
    iterator: function () {
        var createMarkup = (html) => {
            return { __html: html }
        }
        for (var i = 9; i < this.state.posts.firstChild.firstChild.children.length; i++) {
            return (
                <span>
                    <div dangerouslySetInnerHTML={createMarkup(this.state.posts.firstChild.firstChild.children[i].lastChild.innerHTML)} />
                    <span> --------------</span>
                    <span> --------------</span>
                </span>
            );
>>>>>>> dd32b30ee3be9e6e066797a0a33dff9584879c3d
        }
    },

    render: function () {
<<<<<<< HEAD
        <div classname="blog-container">
            <span>{this.state.posts}</span>
        </div>
=======
        if (this.state.posts !== "") {
            return (
                <div>
                    {this.iterator()}
                </div>
            );
        }
        else {
            return <span>No blogs found</span>
        }
>>>>>>> dd32b30ee3be9e6e066797a0a33dff9584879c3d
    }
});

var PortfolioItem = React.createClass({
    render: function () {
        return (
            <div>
            </div>
        );
    }
});

var Portfolio = React.createClass({
    getInitialState: function () {
        return { data: [] };
    },
    render: function () {
        return (
            <div className="portfolio-container">
                <img classID="portrait" src="/images/angel.jpg" length="2" width="2" />
                <p classID="mini-bio">
                    Hi, my name is Angel Murchison. I am a software developer living in Tampa - St. Pete, Florida.
                </p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Portfolio />
                <Blog url="http://localhost:44329/api/medium" />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
        // return (
        //     <div>
        //         <h4>The Jr. Developer’s Benevolent God</h4>
        //         <figure><img alt="" src="https://cdn-images-1.medium.com/max/1024/1*t0kJA2irnqcz9X3UpJufNA.jpeg" />
        //             <figcaption>Don’t be afraid. You’re perfect. Google loves you. I mean, wow. Just look at you. How did you get so cool? I bet Google would love to answer one of your questions. Go ahead, ask.</figcaption>
        //         </figure>
        //         <p>My mother used to tell me “Google is God” whenever I started asking her particular questions about things that weren’t presently important, which has been a habit of mine. She meant it jokingly every time but I always found the oddest, eeriest kernel of truth sitting like a shining gold nugget at the root of the statement.</p>
        //         <p><strong><em>Google is all-knowing, Google is all-powerful.</em></strong></p>
        //         <p>It’s easy to get caught up on the last bit and steer your mind away from the thing entirely, but there’s real value in the first part. <em>Google is all-knowing.</em> Every problem of every nature that a person living in a modern society has come upon has been asked about on Google. If it’s been asked enough, it’s sure to have been asked more directly on a forum like Quora or Stack Overflow. With the question being so easily found by almost anyone at all, someone has to have had an answer. All of those questions, all of those answers, Google will happily hand you every single one with comparatively insignificant effort on your part.</p>
        //         <h4>So just type it in.</h4>
        //         <p>Often the developers that I’ve taught and dealt with find difficulty in asking the ‘right’ question. It’s not a ridiculous problem to have, I think we’ve all been there. How can you ask the right question, when you have a paper-thin grasp of the technology that you’re working on, the framework you’re using, or even the language(s) that it’s all written in? The answer to that seemed clear to me while I was learning the fundamentals, but somehow in past months I’d lost sight of all of the value that it offered me. The answer isn’t all that easy to hear, so if you’re feeling short of breath, dizzy, or otherwise incapable of maintaining consciousness until the end, take a seat and hear clear:</p>
        //         <figure><img alt="" src="https://cdn-images-1.medium.com/max/670/1*IoRC6yo1H83JZONHXo29iw.jpeg" />
        //             <figcaption>Channel your inner this guy.</figcaption>
        //         </figure>
        //         <h3>Type it in.</h3>
        //         <p>What’s supposed to be in this folder? What’s the difference between an int and a float? What the hell does <em>“non-nullable”</em> mean!? Take a moment to forgive yourself for your farsightedness to context clues and then type it in. <strong>Humility is key here.</strong> I really can’t stress that enough, so don’t feel bad about asking such an obvious question. Google doesn’t judge, Google loves you more than anyone else. I actually asked the last question, verbatim, to my instructor only a few months ago. Google wasn’t upset for my betrayal though. It offers only goodness and peace.</p>
        //         <p>Any problem, ambiguity, or question you could ever possibly come across in programming has been asked and answered before, but sometimes you have to break the question down into smaller pieces. Oftentimes when there are high levels of misunderstanding the ‘right’ question will be invisible directly in front of your face, plastered in LCD Brightlight onto your screen. <strong>Start breaking down the screen.</strong> Find the nearest cases of ambiguity or confusion, and ask Google. Your invisible question, or maybe even the answer to it, are hidden in one of those cases.</p>
        //         <p><em>A young developer, lightheaded in a New York high-rise, wipes the sweat from his brow and with a newfound determination looks towards his IDE and begins taking mental note of all of the ambiguities he can find. Just a few moments later, like clockwork, he begins work on his letter of resignation.</em></p>
        //         <p>It’s scary and uncomfortable to be sailing in a sea of confusion, but think of it like this; at some point all of the ambiguity you’re working through <strong><em>has</em></strong> to be cleared or else this technology, this tool, this whatever will forever remain vague and scary, and you will never be a master of it. In those scattered pockets of confusion you may not find the answer to the problem you’re working on, but you also might, and if you don’t you will certainly steer yourself clear of problems in the future. When time isn’t terribly important, dive into that ambiguity.</p>
        //         <blockquote><strong>If the recipe for success is heavy on knowledge (and it is) the recipe for failure is mostly misunderstanding.</strong></blockquote>
        //         <img src="https://medium.com/_/stat?event=post.clientViewed&referrerSource=full_rss&postId=7af459d0cdc4" width="1" height="1" />
        //</div>
        //);
        //iterator: function () {
    //    var createMarkup = (html) => {
    //        return { __html: html }
    //    }
    //    var blogList = [{ key: "" }]
    //    for (var i = 9; i < 16; i++) {
    //        blogList.push({ i: <div dangerouslySetInnerHTML={createMarkup(this.state.posts.firstChild.firstChild.children[i].lastChild.innerHTML)} /> })
    //    }
    //    return (
    //        blogList
    //    );
    //},
