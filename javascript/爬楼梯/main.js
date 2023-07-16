
  n = 2

    if (n <= 2) {
      console.log(n) 
    }
    else{let a = 1
        let b = 1
        for (let i = 0; i < n; i++) {
          [a, b] = [b, a + b]
        }
        console.log(a)
    }
