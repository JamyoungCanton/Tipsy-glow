const ko = {
  common: {
    brand: {
      name: 'Maison Mani',
      initials: 'MM',
      tagline: '집에서 즐기는 살롱 무드',
      footerDescription:
        '감각적인 프레스온 네일 세트, 부드러운 뷰티 루틴, 향후 예약 요청을 위한 네일 콘셉트 스토어입니다.',
    },
    language: {
      label: '언어',
      selectLabel: '언어 선택',
      en: 'English',
      zhCN: '简体中文',
      zhTW: '繁體中文',
      ja: '日本語',
      ko: '한국어',
      vi: 'Tiếng Việt',
    },
    nav: {
      home: '홈',
      shop: '샵',
      booking: '예약',
      admin: '관리',
      toggle: '내비게이션 열기',
    },
    buttons: {
      shopSets: '세트 쇼핑하기',
      shopBestSellers: '베스트셀러 보기',
      requestStyle: '스타일 요청하기',
      viewAllStyles: '전체 스타일 보기',
      view: '보기',
      backHome: '홈으로 돌아가기',
    },
    labels: {
      rating: '평점',
      reviews: '리뷰',
      price: '가격',
      originalPrice: '정가',
    },
    status: {
      comingSoon: '다음 단계',
      demoNote: '현재는 목업 이커머스 경험입니다. 제품, 가격, 예약 플로우는 1단계 데모 데이터입니다.',
    },
    footer: {
      explore: '둘러보기',
      studioNotes: '스튜디오 노트',
    },
    productLabels: {
      shapes: {
        Almond: '아몬드',
        Square: '스퀘어',
        Coffin: '코핀',
        Oval: '오벌',
        Stiletto: '스틸레토',
      },
      lengths: {
        Short: '숏',
        Medium: '미디엄',
        Long: '롱',
      },
      colors: {
        milkyPink: '밀키 핑크',
        blushNude: '블러시 누드',
        roseNude: '로즈 누드',
        pearlBeige: '펄 베이지',
      },
      patterns: {
        glaze: '글레이즈',
        french: '프렌치',
        bow: '리본',
        pearl: '펄',
      },
      stock: {
        inStock: '재고 있음',
        lowStock: '재고 적음',
        soldOut: '품절',
      },
    },
  },
  announcement: {
    message: '새 시즌 세트가 매주 입고됩니다. 45달러 이상 주문 시 프렙 키트를 드려요.',
  },
  home: {
    hero: {
      eyebrow: '소프트 프레스온 네일 아틀리에',
      title: '가장 부드러운 무드를 위한 살롱 네일.',
      subtitle: '크리미한 마감, 세련된 쉐입, 모바일에 어울리는 프리미엄 뷰티 쇼핑 경험을 만나보세요.',
      imageAlt: '부드러운 뷰티 스튜디오 분위기의 글로시 핑크 네일',
      stats: {
        styles: '스타일',
        rating: '평균 평점',
        wear: '착용 목표',
      },
      mood: {
        eyebrow: '오늘의 무드',
        title: '밀키 로즈 글로스 아몬드 길이',
        copy: '주말 약속과 데일리 클린 룩에 어울리는 소프트 포커스 세트입니다.',
      },
    },
    categories: {
      eyebrow: '무드별 쇼핑',
      title: '모든 매니큐어 무드를 위한 큐레이션 입구.',
      items: {
        softGlaze: {
          title: '소프트 글레이즈',
          subtitle: '밀키한 마감, 은은한 쉬머, 매일 어울리는 폴리시드 무드.',
          accent: '$18부터',
          alt: '소프트 글레이즈 네일 세트',
        },
        roseDetail: {
          title: '로즈 디테일',
          subtitle: '꽃잎 톤, 섬세한 라인, 로맨틱한 포인트.',
          accent: '새로운 무드',
          alt: '로즈 디테일 네일 세트',
        },
        cleanFrench: {
          title: '클린 프렌치',
          subtitle: '더 부드러운 살롱 마감의 모던 프렌치 팁.',
          accent: '추천 매치',
          alt: '클린 프렌치 네일 세트',
        },
      },
    },
    bestSellers: {
      eyebrow: '베스트셀러',
      title: '고객들이 다시 찾는 폴리시드 세트.',
    },
    howItWorks: {
      eyebrow: '이용 방법',
      title: '둘러보기부터 스타일링까지 간단한 루틴.',
      copy: '1단계는 브랜드 경험과 홈 여정에 집중합니다. 전체 카트, 예약, 관리 기능은 다음 단계에서 완성됩니다.',
      steps: {
        choose: {
          title: '무드 선택',
          copy: '쉐입, 마감, 길이별로 세트를 둘러보고 제품 정보를 확인하세요.',
        },
        prep: {
          title: '준비하고 눌러 붙이기',
          copy: '간단한 준비, 부드러운 부착, 안정적인 착용감을 고려해 설계했습니다.',
        },
        wear: {
          title: '나만의 방식으로 착용',
          copy: '마음에 드는 스타일을 저장해 예약 요청이나 향후 장바구니 플로우에 활용하세요.',
        },
      },
    },
    shopByShape: {
      eyebrow: '쉐입별 쇼핑',
      title: '이번 주에 어울리는 실루엣을 찾아보세요.',
      imageAlt: '{shape} 네일 쉐입',
      items: {
        almond: {
          description: '부드럽게 좁아지는 쉐입으로 데일리 착용에 잘 어울립니다.',
        },
        square: {
          description: '깔끔한 엣지로 미니멀과 프렌치 스타일에 좋습니다.',
        },
        coffin: {
          description: '존재감 있는 실루엣으로 디테일을 담기 좋습니다.',
        },
        oval: {
          description: '균형감 있고 우아하며 스타일링하기 쉬운 쉐입입니다.',
        },
      },
    },
    products: {
      petalMilkAlmond: {
        name: '페탈 밀크 아몬드 세트',
        tag: '베스트셀러',
        alt: '페탈 밀크 아몬드 프레스온 네일 세트',
      },
      rosewaterFrench: {
        name: '로즈워터 프렌치 팁',
        tag: '재고 적음',
        alt: '로즈워터 프렌치 프레스온 네일 세트',
      },
      velvetBowCoffin: {
        name: '벨벳 리본 코핀 세트',
        tag: '에디터 픽',
        alt: '벨벳 리본 코핀 프레스온 네일 세트',
      },
      pearlOvalGloss: {
        name: '펄 오벌 글로스',
        tag: '재입고',
        alt: '펄 오벌 글로스 프레스온 네일 세트',
      },
    },
  },
  shop: {
    title: '샵',
    filters: {
      title: '필터',
      length: '길이',
      shape: '쉐입',
      color: '컬러',
      pattern: '패턴',
    },
    sorting: {
      label: '정렬',
      popular: '인기순',
      priceLowHigh: '낮은 가격순',
      priceHighLow: '높은 가격순',
      newest: '신상품순',
    },
    productCard: {
      addToBag: '장바구니 담기',
      stockStatus: '재고 상태',
    },
  },
  product: {
    details: {
      title: '제품 상세',
      description: '설명',
      tags: '스타일 태그',
    },
    included: {
      title: '포함 구성',
    },
    howToApply: {
      title: '부착 방법',
    },
    faq: {
      title: 'FAQ',
    },
  },
  cart: {
    title: '장바구니',
    subtotal: '소계',
    empty: '장바구니가 비어 있습니다.',
    quantity: '수량',
    remove: '삭제',
  },
  booking: {
    form: {
      title: '예약 요청',
      name: '이름',
      phone: '전화번호',
      wechat: 'WeChat ID',
      selectedStyle: '선택한 스타일 또는 제품',
      preferredDate: '희망 날짜',
      notes: '메모',
      submit: '요청 제출',
    },
    success: {
      title: '요청 저장됨',
      message: '이 데모에서는 예약 요청이 로컬에 저장됩니다.',
    },
    validation: {
      required: '필수 입력 항목입니다.',
      phone: '유효한 전화번호를 입력하세요.',
      date: '희망 날짜를 선택하세요.',
    },
  },
  about: {
    story: {
      title: '브랜드 스토리',
      copy: 'Maison Mani는 네일 무드, 세심한 스타일링, 쉬운 홈 루틴을 위한 소프트 뷰티 콘셉트입니다.',
    },
    values: {
      title: '가치',
      quality: '편안한 착용감',
      detail: '섬세한 디테일',
      care: '부드러운 뷰티 루틴',
    },
  },
  admin: {
    title: '관리',
    bookings: {
      title: '예약 기록',
      empty: '아직 예약 기록이 없습니다.',
    },
    orders: {
      title: '목업 주문',
      empty: '아직 목업 주문이 없습니다.',
    },
  },
  system: {
    comingSoon: {
      title: '이 플로우는 다음 단계에 준비됩니다.',
      copy: '1단계는 홈 페이지에 집중합니다. 샵 필터, 제품 상세, 카트, 예약, 관리 기록은 이후 단계에서 구축됩니다.',
    },
  },
};

export default ko;
