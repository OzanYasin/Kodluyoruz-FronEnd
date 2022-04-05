# Insertion Sort Projesi -> [22,27,16,2,18,6]

## 1) Aşamalar
- En küçük sayı en başa yazılırarak iki sayının yerleri değiştirilir. [2,27,16,22,18,6]
- İkinci eleman için en küçük sayı bulunur ve yerleri değiştirilir. [2,6,16,22,18,27]
- Sıralı liste tamamlanana kadar bu işlem devam edecek. [2,6,16,18,22,27]

## 2) Big O Gösterimi
- n+(n-1)+(n-2)+(n-3)+...+1
- n*(n+1)/2
- (n^2+n)
- O(n^2)

## 3&4) Time Complexity
Aradığımız sayı '18'. Sıralanmış sayı dizisinin orta kısmında bulunuyor. Bu sebeple;
``` 
[2,6,16,18,22,27] Time complexity = Average Case.
```
---------------------
## [7,3,5,8,2,9,4,15,6] -> Insertion Sort'a Göre İlk 4 Adımının Yazılımı
```
0   [7,3,5,8,2,9,4,15,6]
1   [2,3,5,8,7,9,4,15,6]
2   [2,3,4,8,7,9,5,15,6]
3   [2,3,4,5,7,9,8,15,6]
4   [2,3,4,5,6,9,8,15,7]
```
<!-- 
[2,3,4,5,6,7,8,15,9]
[2,3,4,5,6,7,8,9,15] 
-->
