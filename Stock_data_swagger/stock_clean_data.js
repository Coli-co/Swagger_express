const data = [
  {
    '排名': 1,
    '證券代號': '00632R',
    '證券名稱': '元大台灣50反1',
    '成交股數': '182,725,585',
    '成交筆數': '6,953',
    '開盤價': '5.94',
    '最高價': '5.98',
    '最低價': '5.92',
    '收盤價': '5.93',
    '漲跌價差': '0.05',
    '最後揭示買價': '5.92',
    '最後揭示賣價': '5.93'
  },
  {
    '排名': 2,
    '證券代號': '00673R',
    '證券名稱': '期元大S&P原油反1',
    '成交股數': '76,440,714',
    '成交筆數': '4,291',
    '開盤價': '9.04',
    '最高價': '9.07',
    '最低價': '9.01',
    '收盤價': '9.05',
    '漲跌價差': '0.22',
    '最後揭示買價': '9.04',
    '最後揭示賣價': '9.05'
  },
  {
    '排名': 3,
    '證券代號': '2609',
    '證券名稱': '陽明',
    '成交股數': '65,964,787',
    '成交筆數': '34,529',
    '開盤價': '70.10',
    '最高價': '70.30',
    '最低價': '67.50',
    '收盤價': '67.80',
    '漲跌價差': '1.80',
    '最後揭示買價': '67.70',
    '最後揭示賣價': '67.80'
  },
  {
    '排名': 4,
    '證券代號': '2610',
    '證券名稱': '華航',
    '成交股數': '56,522,824',
    '成交筆數': '15,248',
    '開盤價': '21.50',
    '最高價': '22.05',
    '最低價': '21.50',
    '收盤價': '21.90',
    '漲跌價差': '0.70',
    '最後揭示買價': '21.85',
    '最後揭示賣價': '21.90'
  },
  {
    '排名': 5,
    '證券代號': '2409',
    '證券名稱': '友達',
    '成交股數': '55,878,686',
    '成交筆數': '11,405',
    '開盤價': '17.45',
    '最高價': '17.60',
    '最低價': '17.30',
    '收盤價': '17.35',
    '漲跌價差': '0.05',
    '最後揭示買價': '17.35',
    '最後揭示賣價': '17.40'
  },
  {
    '排名': 6,
    '證券代號': '00715L',
    '證券名稱': '期街口布蘭特正2',
    '成交股數': '55,272,890',
    '成交筆數': '8,729',
    '開盤價': '16.27',
    '最高價': '16.40',
    '最低價': '16.20',
    '收盤價': '16.27',
    '漲跌價差': '1.07',
    '最後揭示買價': '16.27',
    '最後揭示賣價': '16.28'
  },
  {
    '排名': 7,
    '證券代號': '3481',
    '證券名稱': '群創',
    '成交股數': '52,417,010',
    '成交筆數': '7,719',
    '開盤價': '11.90',
    '最高價': '12.15',
    '最低價': '11.85',
    '收盤價': '12.05',
    '漲跌價差': '0.30',
    '最後揭示買價': '12.05',
    '最後揭示賣價': '12.10'
  },
  {
    '排名': 8,
    '證券代號': '2303',
    '證券名稱': '聯電',
    '成交股數': '44,927,971',
    '成交筆數': '17,055',
    '開盤價': '39.70',
    '最高價': '39.70',
    '最低價': '39.10',
    '收盤價': '39.30',
    '漲跌價差': '0.10',
    '最後揭示買價': '39.25',
    '最後揭示賣價': '39.30'
  },
  {
    '排名': 9,
    '證券代號': '2618',
    '證券名稱': '長榮航',
    '成交股數': '43,984,018',
    '成交筆數': '14,230',
    '開盤價': '32.60',
    '最高價': '33.50',
    '最低價': '32.55',
    '收盤價': '33.15',
    '漲跌價差': '0.95',
    '最後揭示買價': '33.15',
    '最後揭示賣價': '33.20'
  },
  {
    '排名': 10,
    '證券代號': '3047',
    '證券名稱': '訊舟',
    '成交股數': '43,221,581',
    '成交筆數': '14,035',
    '開盤價': '17.65',
    '最高價': '18.60',
    '最低價': '17.60',
    '收盤價': '18.20',
    '漲跌價差': '1.10',
    '最後揭示買價': '18.20',
    '最後揭示賣價': '18.25'
  },
  {
    '排名': 11,
    '證券代號': '2367',
    '證券名稱': '燿華',
    '成交股數': '40,302,972',
    '成交筆數': '13,523',
    '開盤價': '23.90',
    '最高價': '24.00',
    '最低價': '23.35',
    '收盤價': '23.75',
    '漲跌價差': '0.05',
    '最後揭示買價': '23.75',
    '最後揭示賣價': '23.80'
  },
  {
    '排名': 12,
    '證券代號': '6443',
    '證券名稱': '元晶',
    '成交股數': '39,033,113',
    '成交筆數': '20,253',
    '開盤價': '39.45',
    '最高價': '41.00',
    '最低價': '39.40',
    '收盤價': '41.00',
    '漲跌價差': '2.40',
    '最後揭示買價': '40.95',
    '最後揭示賣價': '41.00'
  },
  {
    '排名': 13,
    '證券代號': '00637L',
    '證券名稱': '元大滬深300正2',
    '成交股數': '38,289,983',
    '成交筆數': '3,250',
    '開盤價': '16.41',
    '最高價': '16.49',
    '最低價': '16.33',
    '收盤價': '16.38',
    '漲跌價差': '0.13',
    '最後揭示買價': '16.38',
    '最後揭示賣價': '16.39'
  },
  {
    '排名': 14,
    '證券代號': '2330',
    '證券名稱': '台積電',
    '成交股數': '35,355,467',
    '成交筆數': '37,943',
    '開盤價': '473.00',
    '最高價': '475.00',
    '最低價': '472.00',
    '收盤價': '475.00',
    '漲跌價差': '2.50',
    '最後揭示買價': '475.00',
    '最後揭示賣價': '475.50'
  },
  {
    '排名': 15,
    '證券代號': '2888',
    '證券名稱': '新光金',
    '成交股數': '34,024,691',
    '成交筆數': '9,816',
    '開盤價': '8.41',
    '最高價': '8.59',
    '最低價': '8.38',
    '收盤價': '8.57',
    '漲跌價差': '0.19',
    '最後揭示買價': '8.57',
    '最後揭示賣價': '8.58'
  },
  {
    '排名': 16,
    '證券代號': '2890',
    '證券名稱': '永豐金',
    '成交股數': '32,566,274',
    '成交筆數': '9,292',
    '開盤價': '17.70',
    '最高價': '18.00',
    '最低價': '17.50',
    '收盤價': '17.95',
    '漲跌價差': '0.50',
    '最後揭示買價': '17.90',
    '最後揭示賣價': '17.95'
  },
  {
    '排名': 17,
    '證券代號': '00878',
    '證券名稱': '國泰永續高股息',
    '成交股數': '31,819,566',
    '成交筆數': '11,898',
    '開盤價': '16.76',
    '最高價': '16.95',
    '最低價': '16.74',
    '收盤價': '16.94',
    '漲跌價差': '0.25',
    '最後揭示買價': '16.94',
    '最後揭示賣價': '16.95'
  },
  {
    '排名': 18,
    '證券代號': '2834',
    '證券名稱': '臺企銀',
    '成交股數': '30,964,896',
    '成交筆數': '9,988',
    '開盤價': '12.85',
    '最高價': '12.95',
    '最低價': '12.75',
    '收盤價': '12.95',
    '漲跌價差': '0.15',
    '最後揭示買價': '12.90',
    '最後揭示賣價': '12.95'
  },
  {
    '排名': 19,
    '證券代號': '6235',
    '證券名稱': '華孚',
    '成交股數': '30,150,779',
    '成交筆數': '16,772',
    '開盤價': '42.05',
    '最高價': '44.40',
    '最低價': '40.80',
    '收盤價': '40.90',
    '漲跌價差': '0.00',
    '最後揭示買價': '40.90',
    '最後揭示賣價': '40.95'
  },
  {
    '排名': 20,
    '證券代號': '2498',
    '證券名稱': '宏達電',
    '成交股數': '29,522,989',
    '成交筆數': '13,751',
    '開盤價': '61.50',
    '最高價': '61.60',
    '最低價': '60.40',
    '收盤價': '60.80',
    '漲跌價差': '0.40',
    '最後揭示買價': '60.80',
    '最後揭示賣價': '60.90'
  }
]


// let box = []

// data.forEach((item) => {
//   box.push(item['排名'])
// })

// console.log(box)