# firebase remote config vs hackle

|  | firebase remote config | hackle |
| --- | --- | --- |
| SDK 여부 | JS SDK (NPM 지원) | React SDK (Hook 형식), Next.JS 지원 |
| 변경사항 적용 시간 | 앱이 켜질때, 갱신은 1시간 권장 | 최대 1분 (즉시) |
| 파라미터 기능 | 기본적으로 제공 | 프로플랜부터 사용 가능 (이벤트당 0.2원) |
| 세팅 경험 | 중하 | 상 |
| 장점 | firebase 생태계
flutter SDK 존재 | 빠른 세팅과 직관적인 개발
변경사항 즉시 적용 |
| 단점 | javascript SDK 이기 때문에 세팅 경험 불편
세팅을 잘 해야 함 (전역 js 변수를 사용함) | 과금정책 |