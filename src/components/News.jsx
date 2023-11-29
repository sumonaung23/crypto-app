import React, { useEffect, useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import moment from 'moment/moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = () => {
    const location = useLocation();
    const [visibleNewsCount, setVisibleNewsCount] = useState(6);
    const [newsCategory, setNewsCategory] = useState('coindesk');
    const { data, error, isLoading } = useGetCryptoNewsQuery({ newsCategory });
    
    //console.log(data)

    useEffect(() => {
        if (location.pathname === '/news') {
          // Show all news when on the News page
            setVisibleNewsCount(Infinity);
        } else {
          // Reset to initial state when navigating away from the News page
            setVisibleNewsCount(6);
        }
    }, [location.pathname]);

    if (isLoading || !data) return 'Loading...';
    if (error) return 'Error fetching data';
    
     // Check if data is an object and contains the array
    const dataArray = Array.isArray(data.data) ? data.data : [];
    const visibleNews = dataArray.slice(0, visibleNewsCount);
    //console.log(dataArray);

    const handleShowMore = () => {
        setVisibleNewsCount((prevCount) => prevCount + 6);
    };

    return (
        <>
            <div className='home-heading-container'>
                {visibleNews.length < dataArray.length && (
                    <>
                        <Title level={2} className='home-title'>Latest Crypto News</Title>
                        <Title level={3} className='show-more' onClick={handleShowMore}>
                            <Link to='/news' onClick={handleShowMore}>
                            Show More
                            </Link>
                        </Title>
                    </>
                )}
            </div> 

            <Row gutter={[ 24, 24]}>
                {visibleNews.map((item, id) => (
                    <Col xs={24} sm={12} lg={8} key={id}>
                        <Card className='news-card'>
                            <a href={item.url} target='_blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Title className='news-title' level={5}>{item.title}</Title>
                                </div>
                                <p>
                                    {
                                        item.description > 100 ? `${item.description.substring(0, 100)}...` : item.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div style={{marginRight: '20px'}}>
                                        <Avatar src={item?.thumbnail} alt="thumbnail" />
                                    </div>
                                        {/* <Text>{item.createdAt}</Text> */}
                                        <Text>{moment(item.createdAt).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                ) )}
            </Row>
        </>
    )
}

export default News

