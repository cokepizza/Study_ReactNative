import React, { useContext, useState, useEffect, useRef } from 'react';
import { Dimensions, ScrollView, Text } from 'react-native';
import Styled from 'styled-components/native';
import { RandomUserDataContext } from '~/Context/RandomUserData';
import Tab from '~/Components/Tab';
import NotificationList from './NotificationList';

const ProfileTabContainer = Styled.View`
    flex-direction: row;
    background-color: #FEFFFF;
`;

const Label =Styled.Text`
    color: #929292;
    text-align: center;
`;

const GhostList = Styled.View``;

const TabContainer = Styled.SafeAreaView`
    width: 100%;
    height: ${Dimensions.get('window').height}px;
`;

//  굉장히 좋은 컴포넌트. ScrollView가 가로로 표시되어 탭에 따라 움직이는 방식
const Notification = () => {
    const { getMyFeed } = useContext(RandomUserDataContext);
    const [ followingList, setFollowingList ] = useState([]);
    const [ myNotifications, setMyNotifications ] = useState([]);
    const [ showList, setShowList ] = useState(false);
    const [ tabIndex, setTabIndex ] = useState(1);
    const width = Dimensions.get('window').width;
    const tabs = ['팔로잉', '내 소식'];
    const refScrollView = useRef();

    useEffect(() => {
        setFollowingList(getMyFeed(24));
        setMyNotifications(getMyFeed(24));
    }, []);

    //  android에서 scrollview의 초기 위치를 정할 수 없어 넣은 trick
    //  setTimeout을 사용할 경우 createRef는 새로운 참조값이 생겨 찾을 수 없는 값이 되는 반면
    //  useRef는 기존의 참조값을 유지하고 있기 때문에 useRef로 바꿈
    useEffect(() => {
        refScrollView.current.scrollTo({ x: width, animated: false });
        setShowList(true);
    }, []);

    return (
        <TabContainer>
            <ProfileTabContainer>
                {tabs.map((label, index) => (
                    <Tab
                        key={`tab-${index}`}
                        selected={tabIndex === index}
                        label={label}
                        onPress={() => {
                            setTabIndex(index);
                            const node = refScrollView.current;
                            if(node) {
                                node.scrollTo({ x: width * index, y: 0, animated: true });
                            }
                        }}
                    />
                ))}
            </ProfileTabContainer>
            <ScrollView
                ref={refScrollView}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                //  스크롤링 할떄 중간에서 안 멈추고 사진 사이즈별로 멈춘다 사진 시작점에서 멈춘다
                pagingEnabled={true}
                //  리스트의 0번째 아이템을 스크롤 효과(내리거나 움직이는 것과) 별개로 고정하는 헤더로 사용하겠다는 의미. horizontal 속성과 사용 불가
                stickyHeaderIndices={[1]}
                onScroll={event => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setTabIndex(index);
                }}
                //  컨텐츠의 시작점을 정해준다. 여기서는 tabIndex 1이 시작점이고 가로로 되어있으니 ScrollView의 시작점을 width만큼 해줘야 오른쪽 페이지부터 보인다, ios에서만 동작
                contentOffset={{ x: width, y: 0 }}>
                {/* 각각의 FlatList가 남아있기 때문에 두 flatList간의 y값이 유지된다 */}
                {showList ? (<NotificationList
                    id={0}
                    width={width}
                    data={followingList}
                    onEndReached={() => {
                        setFollowingList([ ...followingList, ...getMyFeed(24) ]);
                    }}
                />) : (<GhostList style={{ width }}/>)}
                <NotificationList
                    id={1}
                    width={width}
                    data={myNotifications}
                    onEndReached={() => {
                        setMyNotifications([ ...myNotifications, ...getMyFeed(24) ]);
                    }}
                />
            </ScrollView>
        </TabContainer>
    );
};

export default Notification;