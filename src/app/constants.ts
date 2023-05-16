export const backgroundHeight = 'calc(100vh - 160px)'

// Contact Information
export const gbInfo = {
  email: 'gbnorthyorktoronto@gmail.com',
  address: '100 Bridgeland Ave, North York, ON M6A 1Z4',
  phone: '(416) 782-8255',
}

export interface MainSecondaryItem {
  pathname: string
  label: string
  last: boolean
}

export interface MainMenuItem {
  pathname: string
  label: string
  shouldPush: boolean
  last: boolean
  options?: MainSecondaryItem[]
}

export interface MainMenu {
  home: MainMenuItem
  ourSchool: MainMenuItem
  ourPrograms: MainMenuItem
  weAreGracieBarra: MainMenuItem
  whyGracieBarra: MainMenuItem
  contact: MainMenuItem
}

export const menuOptions: MainMenu = {
  home: {
    pathname: '/home',
    label: 'Home',
    shouldPush: true,
    last: false,
  },
  ourSchool: {
    pathname: '/our-school',
    label: 'Our School',
    shouldPush: true,
    last: false,
    options: [
      {
        pathname: 'our-school',
        label: 'Our School',
        last: false,
      },
      {
        pathname: 'our-school/facility',
        label: 'Our Facility',
        last: false,
      },
      {
        pathname: 'our-school/schedule',
        label: 'Weekly Schedule',
        last: false,
      },
      {
        pathname: 'our-school/instructors',
        label: 'Our Instructors',
        last: true,
      },
    ]
  },
  ourPrograms: {
    pathname: '/our-programs',
    label: 'Our Programs',
    shouldPush: false,
    last: false,
    options: [
      {
        pathname: 'our-programs/kids-and-teens',
        label: 'Kids and Teens',
        last: false,
      },
      {
        pathname: 'our-programs/adults',
        label: 'Adults',
        last: false,
      },
      {
        pathname: 'our-programs/women-self-defense',
        label: 'Women\'s Self-Defense',
        last: false,
      },
      {
        pathname: 'our-programs/private-training',
        label: 'Private Training',
        last: true,
      },
    ],
  },
  weAreGracieBarra: {
    pathname: '/we-are-gracie-barra',
    label: 'We are Gracie Barra',
    shouldPush: true,
    last: false,
  },
  whyGracieBarra: {
    pathname: '/why-gracie-barra',
    label: 'Why Gracie Barra',
    shouldPush: true,
    last: false,
  },
  contact: {
    pathname: '/contact',
    label: 'Contact Us',
    shouldPush: true,
    last: true,
  }
}
