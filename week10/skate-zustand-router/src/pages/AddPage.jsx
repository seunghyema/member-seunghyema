import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrickStore } from '../store/trickStore';

export default function AddPage() {
  const tricks = useTrickStore((state) => state.tricks);
  const addTrick = useTrickStore((state) => state.addTrick);
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;

    addTrick(trimmed);
    setName('');
  }

  return (
    <section className="page">
      <header className="page-header">
        <p className="eyebrow">트릭 추가</p>
        <h1>오늘 연습할 트릭은?</h1>
        <p className="page-desc">
          연습해야하는 트릭을 작성하세요
        </p>
      </header>

      <form className="add-form" onSubmit={handleSubmit}>
        <label htmlFor="trick-name">트릭 이름</label>
        <input
          id="trick-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="예: Pop Shove-it"
        />
        <button className="btn-primary" type="submit">
          + 트릭 추가
        </button>
      </form>

      <p className="hint">
        현재 저장된 트릭 <strong>{tricks.length}</strong>개 ·{' '}
        <Link to="/list">목록 페이지</Link>에서 확인하세요
      </p>
    </section>
  );
}
