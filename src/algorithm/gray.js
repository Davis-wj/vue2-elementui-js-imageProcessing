// 这里应用的是平均灰度值法进行灰度处理
export function gray(data) {
  for (let i = 0, len = data.length; i < len; i += 4) {
    const value = (data[i] + data[i + 1] + data[i + 1]) / 3;
    data[i] = data[i + 1] = data[i + 2] = value;
  }
}