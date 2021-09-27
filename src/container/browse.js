import React, { useEffect, useState } from 'react'
import Fuse from "fuse.js"
import './browse.css'
import { SelectProfileContainer } from './profile'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Header, Loading, Card, Player } from '../components';
import * as ROUTES from "../constants/routes"
import logo from "../logo.svg"
import { useHistory } from 'react-router';
import FooterContainer from './footer';
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from '../components/card/styles/card';
function NextArrow(props) {
    const { onClick } = props;
    return <ArrowRight onClick={onClick} />
}
function PrevArrow(props) {
    const { onClick } = props;
    return <ArrowLeft onClick={onClick} />
}
const BrowseContainer = ({ slides }) => {
    const [category, setCategory] = useState('series')
    const [slideRows, setSlideRows] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [profile, setProfile] = useState({});
    const auth = getAuth();
    const [user, setUser] = useState({ displayName: "", photoURL: '' });
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    onAuthStateChanged(auth, (user) => {
        setUser(user)
    });
    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ['data.description', 'data.title', 'data.genre'],
        })
        const results = fuse.search(searchTerm).map(({ item }) => item);
        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
            console.log(results);
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm])
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile]);
    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category])
    return (profile.displayName ? (
        <>{
            loading ? <Loading src={user.photoURL} /> : <Loading.RealeaseBody />
        }
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Container>
                    <Header.Group>
                        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                        <Header.TextLink
                            active={category === 'series' ? 'true' : 'false'}
                            onClick={() => setCategory('series')}
                        >Series</Header.TextLink>
                        <Header.TextLink
                            active={category === 'films' ? 'true' : 'false'}
                            onClick={() => setCategory('films')}
                        >Films</Header.TextLink>
                    </Header.Group>
                    <Header.Group>
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} alt="photo"></Header.Picture>
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} alt="photo"></Header.Picture>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => {
                                        signOut(auth).then(() => {
                                            history.push(ROUTES.HOME);
                                        }).catch((error) => {
                                            // An error happened.
                                        });
                                    }}>Sign Out</Header.TextLink>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Container>
                <Header.Feature>
                    <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connections as he walks the streets of Gotham City.
                        Aurthur wears two masks -- the one he paints for his day job as a clown, and the duise he projects in a futile attempt to fell like he's part of the world around him.
                    </Header.Text>

                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Slider {...settings} >
                            {
                                slideItem.data.map((item) => (
                                    <Card.Item key={item.id} item={item}>
                                        <Card.Image
                                            src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                ))
                            }
                        </Slider>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button></Player.Button>
                                <Player.Video src="./videos/bunny.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))

                }
            </Card.Group>
            <FooterContainer />
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    ));
}

export default BrowseContainer
