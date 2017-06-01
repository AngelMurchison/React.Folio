// Our React components.
// Hierarchical order starting with the smallest component.

var BlogPost = React.createClass({
    render: function () {
        return (
            <div></div>
        );
    }
});

var Blog = React.createClass({
    getInitialState: function () {
        return { posts: [] };
    },
    // ACCESS-CONTROL-ALLOW-ORIGIN IS BUSTED, which token am i supposed to use?!?!?!?
    // host, accept-charset, origin are restricted headers (the browser handles those mandatorily)
    //componentWillMount: function () {
    //    let xhr = new XMLHttpRequest();
    //    let token = "2edc30d0dbb4cbd4272c9d16968c300c4876ffae0375e0f804dd699a7a40ddee2"
    //    xhr.open('get', this.props.url, true);
    //    xhr.setRequestHeader("Access-Control-Allow-Headers", "Authorization")
    //    xhr.setRequestHeader("Authorization", "Bearer " + token)
    //    xhr.setRequestHeader("Content-Type", "application/json")
    //    xhr.setRequestHeader("Accept", "application/json")
    //    xhr.onload = function () {
    //        let posts = JSON.parse(xhr.responseText);
    //        this.setState({ posts: posts });
    //    }.bind(this);
    //    xhr.send();
    //},

    componentWillMount: function () {
      
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                console.log(this.responseText);
            }
        });

        xhr.open("GET", "https://api.medium.com/v1/me,", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer 218d7a2948fa55fe0864bc2e48fe416c269447336ee5910b4f57243c9b8eb2da9");
        xhr.setRequestHeader("Cache-Control", "no-cache");

        console.log(xhr.ge)

        xhr.send();
    },
    render: function () {
        return (
            <div className="blog-container">
                This is the blog container.
            </div>
        );
    }
});

var PortfolioItem = React.createClass({
    render: function () {
        return (
            <div></div>
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
                <img classID="portrait" src="/images/angel.jpg" length="2" width="2"  />
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
                <Blog url="https://api.medium.com/v1/me"/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
