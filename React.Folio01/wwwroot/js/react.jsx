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

    componentDidMount: function () {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/xml")
        xhr.open('get', this.props.url, true);
        xhr.setRequestHeader("Content-Type", "application/xml")

        xhr.onload = function () {
            let parser = new DOMParser();
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
        }
    },

    render: function () {
        <div classname="blog-container">
            <span>{this.state.posts}</span>
        </div>
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
