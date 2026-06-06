import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrickStore } from '../store/trickStore';

export default function ListPage() {
  const tricks = useTrickStore((state) => state.tricks);
  const updateTrick = useTrickStore((state) => state.updateTrick);
  const deleteTrick = useTrickStore((state) => state.deleteTrick);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  function startEdit(trick) {
    setEditingId(trick.id);
    setEditName(trick.name);
  }

  function saveEdit(id) {
    const trimmed = editName.trim();
    if (!trimmed) return;

    updateTrick(id, trimmed);
    setEditingId(null);
    setEditName('');
  }

  function cancelEdit() {
    setEditingId(null);
    setEditName('');
  }

  return (
    <section className="page">
      <header className="page-header">
        <p className="eyebrow">트릭 목록</p>
        <h1>내 트릭 리스트</h1>
        <p className="page-desc">
          수정 및 삭제 가능
        </p>
      </header>

      {tricks.length === 0 ? (
        <div className="empty-box">
          <p>아직 트릭이 없어요.</p>
          <Link className="btn-link" to="/">
            트릭 추가하러 가기 →
          </Link>
        </div>
      ) : (
        <ul className="trick-list">
          {tricks.map((trick, index) => (
            <li className="trick-item" key={trick.id}>
              <span className="trick-number">{index + 1}</span>

              {editingId === trick.id ? (
                <div className="edit-row">
                  <input
                    value={editName}
                    onChange={(event) => setEditName(event.target.value)}
                    autoFocus
                  />
                  <button className="btn-small" type="button" onClick={() => saveEdit(trick.id)}>
                    저장
                  </button>
                  <button className="btn-small btn-ghost" type="button" onClick={cancelEdit}>
                    취소
                  </button>
                </div>
              ) : (
                <>
                  <span className="trick-name">{trick.name}</span>
                  <div className="item-actions">
                    <button className="btn-small" type="button" onClick={() => startEdit(trick)}>
                      수정
                    </button>
                    <button
                      className="btn-small btn-danger"
                      type="button"
                      onClick={() => deleteTrick(trick.id)}
                    >
                      삭제
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
