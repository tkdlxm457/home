		/**
		 * 분, 초 가 9보다 크다면 0으로 바꿔준다.
		 *
		 * @param { number } num 분 / 초
		 */
		function addzero(num) {
			if (num < 10) { num = "0" + num; }
			return num;
		}