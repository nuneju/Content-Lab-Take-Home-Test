////////////////////////////////////////////////////////////////////////////////
// PLEASE DO NOT CHANGE THIS FILE
////////////////////////////////////////////////////////////////////////////////

export function getAvailableCategories () {
  return [
    'Submarines',
    'Planes',
    'Trains',
    'Teslas',
    'Automobiles',
  ]
}

export function sendToAPI (data) {
  let response = {}

  // this is simulating the API failing 10% of the time when trying to save an article
  if (Math.random() < 0.9) {
    response = {
      ok: 1,
      message: 'The article has been successfully saved.'
    }
  } else {
    response = {
      ok: 0,
      message: 'An unknown error occurred during article save. Try again later.'
    }
  }

  return response
}

export function fetchArticlesFromAPI () {
  return [
    {
      title: 'Starbucks Customers Are Upset Over This Discontinued Holiday Drink',
      author: 'Anna Gragert',
      category: 'News',
      views: '7',
      isDeleted: false,
    },
    {
      title: 'Native Land Beer Is Being Released to Support Indigenous Tribes and Initiatives',
      author: 'Anna Gragert',
      category: 'News',
      views: '08',
      isDeleted: false,
    },
    {
      title: 'Why You Should Use PVC Pipe in Your Plumbing (And Where to Use It)',
      author: 'Chris Deziel',
      category: 'Home Hacks & Answers',
      views: '9',
      isDeleted: false,
    },
    {
      title: 'Eve Epstein: Homes Are Expressions of Our Identities',
      author: 'Laurie Gunning Grossman',
      category: 'Design',
      views: 11,
      isDeleted: false,
    },
    {
      title: 'Win 25 Free Hotel Stays by Competing in This Strange Holiday Music Challenge',
      author: 'Charlotte Beach',
      category: 'News',
      views: 4,
      isDeleted: false,
    },
    {
      title: '7 of the Most Amazing Power-Washing Before and After Photos',
      author: 'Stefanie Waldek',
      category: 'Design',
      views: 0,
      isDeleted: false,
    },
    {
      title: '5 Stunning Christmas Garlands You Can Find on Amazon',
      author: 'Pauline Lacsamana',
      category: 'Design',
      views: 6,
      isDeleted: false,
    },
    {
      title: 'A New Study Found Where Most People Hide Holiday Gifts',
      author: 'Kirsten Nunez',
      category: 'News',
      views: '07',
      isDeleted: false,
    },
    {
      title: 'This Holiday Hack Shows You How to Fill Empty Spots on Your Christmas Tree',
      author: 'Anna Gragert',
      category: 'News',
      views: '07',
      isDeleted: false,
    },
    {
      title: 'Lowe\'s Is Giving Away Free Holiday House Kits',
      author: 'Anna Gragert',
      category: 'News',
      views: 1,
      isDeleted: false,
    },
    {
      title: 'Pillsbury\'s Holiday Cookie Doughs Are Back — and Can Be Eaten Raw',
      author: 'Kirsten Nunez',
      category: 'News',
      views: 2,
      isDeleted: false,
    },
    {
      title: 'The \'Home Alone\' House Is Now Available on Airbnb, but Here\'s the Catch',
      author: 'Anna Gragert',
      category: 'News',
      views: 3,
      isDeleted: false,
    },
    {
      title: 'This Costco Treat Is the Ultimate Holiday Must-Have',
      author: 'Kirsten Nunez',
      category: 'News',
      views: 3,
      isDeleted: false,
    },
    {
      title: '12 Vegan Holiday Cookie Recipes That Are Seriously Festive',
      author: 'Charlotte Beach',
      category: 'Design',
      views: '7',
      isDeleted: false,
    },
    {
      title: 'DIY Mercury Glass Ornaments',
      author: 'Trisha Sprouse',
      category: 'DIY',
      views: '7',
      isDeleted: false,
    },
    {
      title: '7 Home Office Cleaning Steps for an Organized Start to 2022',
      author: 'Charlotte Beach',
      category: 'Design',
      views: 8,
      isDeleted: false,
    },
    {
      title: 'DIY Mercury Glass Ornaments',
      author: 'Trisha Sprouse',
      category: 'DIY',
      views: '7',
      isDeleted: true,
    },
    {
      title: '7 Home Office Cleaning Steps for an Organized Start to 2022',
      author: 'Charlotte Beach',
      category: 'Design',
      views: 8,
      isDeleted: true,
    },
    {
      title: 'This Campaign Highlights the Real Places Behind IKEA Product Names',
      author: 'Kirsten Nunez',
      category: 'News',
      views: 11,
      isDeleted: false,
    },
    {
      title: 'Aldi Just Brought Back a Cult-Favorite Cookie',
      author: 'Kirsten Nunez',
      category: 'News',
      views: 12,
      isDeleted: false,
    },
    {
      title: 'How to Style a Dark Academia Room',
      author: 'Lisa Marie Basile',
      category: 'Design',
      views: 1,
      isDeleted: false,
    },
    {
      title: '7 Kwanzaa Decor Ideas From Creative Instagram Users',
      author: 'Anna Gragert',
      category: 'Design',
      views: 1,
      isDeleted: false,
    },
    {
      title: 'Costco Fans Are Loving This New Holiday Bakery Item',
      author: 'Kirsten Nunez',
      category: 'News',
      views: 0,
      isDeleted: false,
    },
    {
      title: '8 Make-Ahead Holiday Meals That Will Lower Your Stress Level',
      author: 'Stefanie Waldek',
      category: 'Design',
      views: 0,
      isDeleted: false,
    },
    {
      title: '15 Winter Home Decor Ideas to Cozy Up Your Space Instantly',
      author: 'Siobhan Murphy',
      category: 'Design',
      views: 0,
      isDeleted: true,
    },
    {
      title: 'Etsy Predicts This Lighting Style Will Take Over 2022',
      author: 'Stefanie Waldek',
      category: 'News',
      views: 0,
      isDeleted: true,
    },
  ]
}