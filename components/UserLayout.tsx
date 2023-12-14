import React, {useRef, useState, createContext, useContext} from 'react';
import {DrawerLayoutAndroid, View, Platform, Modal} from 'react-native';
import type {PropsWithChildren} from 'react';
import {MovieHeader} from './movies/MovieHeader';

type LayoutProps = PropsWithChildren<{
  position: 'left' | 'right';
  navigationView: JSX.Element;
}>;

const isiOS: boolean = Platform.OS === 'ios';

interface UserLayoutType {
  open: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const UserLayoutContext = createContext<UserLayoutType>({} as UserLayoutType);

function UserLayout(props: LayoutProps): JSX.Element {
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const {children, position, navigationView} = props;
  const [open, setOpen] = useState<boolean>(false);

  const openDrawer = () => {
    if (drawer?.current && !isiOS) {
      drawer.current.openDrawer();
    } else {
      setOpen(true);
    }
  };

  const closeDrawer = () => {
    if (drawer?.current && !isiOS) {
      drawer.current.closeDrawer();
    } else {
      setOpen(false);
    }
  };

  const Component = (prop: PropsWithChildren) => {
    const {children: child} = prop;
    if (isiOS) {
      return (
        <View style={{flex: 1}}>
          <Modal
            animationType="slide"
            presentationStyle="pageSheet"
            visible={open}>
            {navigationView}
          </Modal>
          {child}
        </View>
      );
    } else {
      return (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerPosition={position}
          drawerWidth={300}
          renderNavigationView={() => navigationView}>
          <View style={{flex: 1}}>{child}</View>
        </DrawerLayoutAndroid>
      );
    }
  };

  return (
    <UserLayoutContext.Provider
      value={{
        open,
        openDrawer,
        closeDrawer,
      }}>
      <Component>
        <MovieHeader title="🎥 Movie Catalogue" onClick={openDrawer} />
        {children}
      </Component>
    </UserLayoutContext.Provider>
  );
}

export const useUserLayoutContext = () => useContext(UserLayoutContext);

export default UserLayout;
